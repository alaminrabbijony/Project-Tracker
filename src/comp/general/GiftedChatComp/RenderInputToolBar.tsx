import { StyleSheet} from "react-native";
import React from "react";
import { InputToolbar } from "react-native-gifted-chat";
import { useTheme } from "@shopify/restyle";

export default function RenderInputToolBar(props: any) {
  const t = useTheme();
  return (
    <InputToolbar
      {...props}
      containerStyle={{
        borderRadius: 16,
      }}
      primaryStyle={{
        alignItems: "center",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: t.colors.logsSecondary,
        backgroundColor: t.colors.background,
        opacity: 1,
      }}
    />
  );
}

const styles = StyleSheet.create({});
