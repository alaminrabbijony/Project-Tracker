import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";
import { Send } from "react-native-gifted-chat";
import { IconBtn } from "../RestyleComp";

export default function RenderSend(props: any) {
  const t = useTheme();
  return (
    <Send {...props} containerStyle={styles.sendContainer}>
      <IconBtn
        name="post-add"
        size={24}
        color={t.colors.iconBtn}
        padding="s"
        borderRadius="m"
      />
    </Send>
  );
}

const styles = StyleSheet.create({
  sendContainer: {
    justifyContent: "center",
    marginRight: 8,
  },
});
