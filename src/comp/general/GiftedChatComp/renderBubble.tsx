import PreviewImg from "@/comp/Camera/PreviewImg";
import { useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import { Image, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { Bubble } from "react-native-gifted-chat";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, IoniconsIconBtn, TxtBody } from "../RestyleComp";

export default function RenderBubble(props: any) {
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const t = useTheme();
  const { currentMessage } = props;
  const isEdit = false;
  const insets = useSafeAreaInsets();
  if (currentMessage?.image) {
    return (
      <Box padding="s" marginBottom="s">
        <TouchableOpacity onPress={() => setShowPreview(true)}>
          <Image
            source={{ uri: props.currentMessage.image }}
            style={{ width: 200, height: 200 }}
          />
        </TouchableOpacity>
        {currentMessage?.text ? (
          <Box
            style={{
              backgroundColor: t.colors.logPrimary,
              padding: 5,
              alignItems: "center",
              borderRadius: 12,
              borderColor: t.colors.logsSecondary,
              borderWidth: 2,
            }}
          >
            <TxtBody
              style={{
                color: t.colors.logsSecondary,
              }}
            >
              {currentMessage.text}
            </TxtBody>
          </Box>
        ) : null}

        <Modal visible={showPreview} animationType="slide" transparent={false}>
          <TouchableOpacity
            style={{
              position: "absolute",
              top: insets.top + 12,
              right: 16,
              padding: 8,
              zIndex: 10,
            }}
            onPress={() => setShowPreview(false)}
          >
            <IoniconsIconBtn name="close" color="red" size={48} />
          </TouchableOpacity>
          <PreviewImg
            isEdit={isEdit}
            previewUri={currentMessage.image}
            imgCaption={currentMessage.text}
          />
        </Modal>
      </Box>
    );
  }

  return (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: t.colors.logPrimary,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: t.colors.logsSecondary,
          paddingVertical: 8,
          paddingHorizontal: 12,
          marginBottom: 8,
          marginHorizontal: 8,
          maxWidth: "80%",
          alignSelf: "flex-end",
        },
        left: {
          backgroundColor: t.colors.logsSecondary,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: t.colors.logPrimary,
          paddingVertical: 8,
          paddingHorizontal: 12,
          marginBottom: 8,
          marginHorizontal: 8,
          maxWidth: "80%",
          alignSelf: "flex-start",
        },
      }}
      textStyle={{
        right: {
          color: t.colors.logsSecondary,
          fontWeight: "600",
          flexShrink: 1, // ✅ allows wrapping
          flexWrap: "wrap", // ✅ force line breaks
        },
        left: {
          color: "#DDDDDD",
          flexShrink: 1,
          flexWrap: "wrap",
        },
      }}
      renderMessageText={(textProps) => (
        <TxtBody
          {...textProps}
          style={{
            color: t.colors.logsSecondary,
            fontWeight: "600",
            flexShrink: 1,
            flexWrap: "wrap",
            width: "100%", // ✅ prevents infinite row
          }}
        >
          {textProps.currentMessage.text}
        </TxtBody>
      )}
    />
  );
}

const styles = StyleSheet.create({});
