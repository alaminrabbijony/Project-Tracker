import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";
import { Box, TxtBody } from "../general/RestyleComp";

type Props = {
  msg: string | undefined;
};

export default function CaptionPreview({ msg }: Props) {
  const t = useTheme();
  return (
    <Box
      style={{
        width: "100%",
        backgroundColor: t.colors.logPrimary,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 8
      }}
    >
      <TxtBody
        style={{
          color: t.colors.logsSecondary,
        }}
      >
        {msg}
      </TxtBody>
    </Box>
  );
}

const styles = StyleSheet.create({});
