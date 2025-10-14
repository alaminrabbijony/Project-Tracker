import { useTheme } from "@shopify/restyle";
import {
  AudioModule,
  RecordingPresets,
  setAudioModeAsync,
  useAudioRecorder,
  useAudioRecorderState,
} from "expo-audio";
import React, { useEffect } from "react";
import { Alert, Pressable, StyleSheet } from "react-native";
import { FontAwesomeIconBtn, TxtBody } from "../general/RestyleComp";

export default function AudioRecoder() {
  const audioRecoder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const recordingState = useAudioRecorderState(audioRecoder);
  const t = useTheme();
  //Take Permissions
  useEffect(() => {
    (async () => {
      const status = await AudioModule.requestRecordingPermissionsAsync();
      if (!status.granted) {
        Alert.alert("Permission to access microphone was denied");
      }
      setAudioModeAsync({
        playsInSilentMode: true,
        allowsRecording: true,
      });
    })();
  }, []);
  //reording function
  const record = async () => {
    await audioRecoder.prepareToRecordAsync();
    audioRecoder.record();
  };

  //stop reording function
  const stopRecording = async () => {
    await audioRecoder.stop();
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.menuItem,
        { backgroundColor: pressed ? "red" : t.colors.inputToolBarBg },
      ]}
      onPress={() => (recordingState.isRecording ? stopRecording : record)}
    >
      <FontAwesomeIconBtn name="microphone" size={22} color={t.colors.inputColor} />
      <TxtBody style={styles.menuText}>Microphone</TxtBody>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  menuText: {
    marginLeft: 8,
    fontSize: 16,
  },
});
