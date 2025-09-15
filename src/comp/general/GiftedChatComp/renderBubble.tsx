import { StyleSheet} from "react-native";
import React from "react";
import { Bubble } from "react-native-gifted-chat";
import { useTheme } from "@shopify/restyle";

export default function RenderBubble(props: any) {
  const t = useTheme();
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: t.colors.logPrimary, // dark background (black here)
          borderRadius: 10, // rounded edges
          borderWidth: 2, // border thickness
          borderColor: t.colors.logsSecondary, // white border
          padding: 8, // spacing inside
          marginBottom: 8, // spacing between bubbles
          // don’t let it stretch across screen
        },
        left: {},
      }}
      textStyle={{
        right: {
          color: t.colors.logsSecondary, // white text
          fontWeight: "600",
        },
        left: {
          color: "#DDDDDD", // softer gray for received messages
        },
      }}
    />
  );
}

const styles = StyleSheet.create({});
