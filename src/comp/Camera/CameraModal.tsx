import { useTheme } from "@shopify/restyle";
import * as FileSystem from "expo-file-system";
import * as ImageManipulator from "expo-image-manipulator";
import * as MediaLibrary from "expo-media-library";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Linking,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Camera, useCameraDevice } from "react-native-vision-camera";
import { Box, IoniconsIconBtn, TxtTitle } from "../general/RestyleComp";
import PreviewImg from "./PreviewImg";

type capturePhoto = {
  uri: string;
  caption?: string;
}; // mimic Log.img. non nullable is used for matching same structure in the types

type Props = {
  visible: boolean;
  onClose: () => void;
  onPhoto: (photo: string, caption?: string) => void;
};

export default function CameraModal({ visible, onClose, onPhoto }: Props) {
  const cameraRef = useRef<Camera | null>(null);
  const device = useCameraDevice("back");
  const [hasPermission, setPermission] = useState<boolean | null>(null);
  const [busy, setBusy] = useState(false);
  const [flash, setFlash] = useState<"on" | "off" | "auto">("off");

  const [previewUri, setPreviewUri] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>("");
  const insets = useSafeAreaInsets();

  const t = useTheme();
  useEffect(() => {
    (async () => {
      const status = await Camera.getCameraPermissionStatus();
      if (status !== "granted") {
        const r = await Camera.requestCameraPermission();
        setPermission(r === "granted");
      } else setPermission(true);
    })();
  }, []);

  if (!visible) return null;

  if (hasPermission === false) {
    return (
      <Box>
        <TxtTitle>Camera permission denied. Please enable it in settings.</TxtTitle>
        <TouchableOpacity onPress={() => Linking.openSettings?.()}>
          <TxtTitle>Open Settings</TxtTitle>
        </TouchableOpacity>
      </Box>
    );
  }

  if (!device) {
    return (
      <Box style={styles.center}>
        <TxtTitle>No camera available on this emulator</TxtTitle>
      </Box>
    );
  }

  const takePhoto = async () => {
    if (!cameraRef.current || busy) return;
    setBusy(true);
    try {
      const pic = await cameraRef.current.takePhoto({
        flash,
        enableShutterSound: false,
      });
      // VisionCamera returns only `path`
      const rawUri = Platform.OS === "android" ? `file://${pic.path}` : pic.path;

      // compress + resize with expo-image-manipulator
      const manipulated = await ImageManipulator.manipulateAsync(
        rawUri,
        [{ resize: { width: 1000 } }], // resize to width 1000px
        { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
      );
      // optionally save to gallery

      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === "granted") {
        try {
          await MediaLibrary.requestPermissionsAsync();
        } catch (error) {
          console.warn("Could not save photo to gallery", error);
        }
      }

      // preview
      setPreviewUri(manipulated.uri);

      // return photo uri to parent
      //onPhoto(manipulated.uri); // remove for preview

      await FileSystem.deleteAsync(rawUri, { idempotent: true });
    } catch (error) {
      console.error(error);
    } finally {
      setBusy(false);
    }
  };
  if (previewUri) {
    return (
      <PreviewImg
        caption={caption}
        setCaption={setCaption}
        onPhoto={onPhoto}
        onClose={onClose}
        previewUri={previewUri}
        setPreviewUri={setPreviewUri}
        isEdit={true}
      />
    );
  }

  return (
    <Box style={[styles.container, { flex: 1 }]}>
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />

      <TouchableOpacity
        style={{
          position: "absolute",
          top: insets.top + 12,
          right: 16,
          padding: 8,
          zIndex: 10,
        }}
        onPress={onClose}
      >
        <IoniconsIconBtn name="close" color="red" size={48} />
      </TouchableOpacity>

      <Box style={[styles.controls]}>
        <TouchableOpacity style={[styles.shutter]} onPress={takePhoto}>
          {busy ? <ActivityIndicator color="black" /> : <Box style={[styles.dot]} />}
        </TouchableOpacity>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  controls: {
    position: "absolute",
    bottom: 24,
    width: "100%",
    alignItems: "center",
  },
  shutter: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: { width: 48, height: 48, borderRadius: 24, backgroundColor: "red" },
});
