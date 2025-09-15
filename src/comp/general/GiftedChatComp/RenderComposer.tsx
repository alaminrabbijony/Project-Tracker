import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";
import { Composer } from "react-native-gifted-chat";

export default function RenderComposer(props: any) {
  const t = useTheme();
  return (
    <>
      <Composer
        textInputStyle={{
          color: t.colors.inputColor,
        }}
        {...props}
        placeholder="Add your Log...."
      />
      {/* error should be here after binding with zustand */}
    </>
  );
}

const styles = StyleSheet.create({});
