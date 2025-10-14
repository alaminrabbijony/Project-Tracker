import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";
import { InputToolbar } from "react-native-gifted-chat";

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
        borderBottomWidth: 1,
        borderBottomColor: t.colors.inputToolBarBorder,
        borderTopWidth: 1,
        borderTopColor: t.colors.inputToolBarBorder,
        borderWidth: 1,
        //borderColor: t.colors.inputToolBarBorder,
        backgroundColor: t.colors.inputToolBarBg,
        opacity: 1,
      }}
    />
  );
}

const styles = StyleSheet.create({});
