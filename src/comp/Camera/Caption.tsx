import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Box, TxtBody } from "../general/RestyleComp";

type Props = {
  caption: string;
  setCaption: (cap: string) => void;
  onPhoto: (photo: string, caption?: string) => void;
  onClose: () => void;
  previewUri: string | null;
  setPreviewUri: (uri: string | null) => void;
};

export default function Caption({
  caption,
  setCaption,
  onPhoto,
  onClose,
  previewUri,
  setPreviewUri,
}: Props) {
  const t = useTheme();

  return (
    <Box
      style={{
        padding: 12,
        backgroundColor: t.colors.inputColor,
        flexDirection: "row",
      }}
    >
      <TextInput
        style={{
          flex: 1,
          padding: 8,
          borderWidth: 1,
          borderColor: t.colors.logSecondary,
          color: t.colors.logsSecondary,
        }}
        placeholder="Add a log..."
        value={caption}
        onChangeText={setCaption}
      />

      <TouchableOpacity
        style={{
          marginLeft: 8,
          padding: 12,
          backgroundColor: t.colors.logPrimary,
          borderRadius: 8,
        }}
        onPress={() => {
          if (!previewUri) return;

          onPhoto(previewUri, caption);
          onClose(); // close after sending
          setPreviewUri(null); // reset preview
          setCaption(""); // clear caption
        }}
      >
        <TxtBody style={{ color: t.colors.logsSecondary, fontWeight: "600" }}>
          Send
        </TxtBody>
      </TouchableOpacity>
    </Box>
  );
}

const styles = StyleSheet.create({});
