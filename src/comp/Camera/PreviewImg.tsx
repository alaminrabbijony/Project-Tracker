import React from "react";
import { Image, StyleSheet } from "react-native";
import { Box, ScrollView } from "../general/RestyleComp";
//import { Image } from "react-native-reanimated/lib/typescript/Animated";
import Caption from "./Caption";
import CaptionPreview from "./CaptionPreview";

type Props = {
  caption?: string;
  setCaption?: (cap: string) => void;
  onPhoto?: (photo: string, caption?: string) => void;
  onClose?: () => void;
  previewUri?: string | null;
  setPreviewUri?: (uri: string | null) => void;
  isEdit: boolean;
  imgCaption?: string | undefined;
};

export default function PreviewImg({
  caption,
  setCaption,
  onPhoto,
  onClose,
  previewUri,
  setPreviewUri,
  isEdit,
  imgCaption,
}: Props) {
  return (
    <Box
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <Image
        source={{ uri: previewUri || undefined }}
        style={{ flex: 1, resizeMode: "contain" }}
      />
      {isEdit &&
      setCaption &&
      onPhoto &&
      onClose &&
      previewUri &&
      setPreviewUri ? (
        <Caption
          caption={caption ?? ""}
          setCaption={setCaption}
          onPhoto={onPhoto}
          onClose={onClose}
          previewUri={previewUri}
          setPreviewUri={setPreviewUri}
        />
      ) : (
        <ScrollView
          style={{
            width: "100%",
            maxHeight: "15%", // gives room for long text
          }}
          contentContainerStyle={{
            paddingHorizontal: 12,
            paddingVertical: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CaptionPreview msg={imgCaption ?? ""} />
        </ScrollView>
      )}
    </Box>
  );
}

const styles = StyleSheet.create({});
