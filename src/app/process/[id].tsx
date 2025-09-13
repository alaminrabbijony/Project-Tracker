import { Box, Container, TxtBody } from "@/comp/general/RestyleComp";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";


import LogScreen from "@/comp/general/screens/LogScreen";

type formData = {
  msg: string;
};

export default function ProcessScreen() {
  const t = useTheme();
  return (
    <Box style={{ flex: 1 }}>
      <Container style={[styles.titleContainer, {}]}>
        <TxtBody
          style={[
            styles.titleTxt,
            {
              color: t.colors.title,
            },
          ]}
        >
          Process Name
        </TxtBody>
        <TxtBody
          style={[
            {
              color: t.colors.plain,
            },
          ]}
        >
          Date: 30/08/2025
        </TxtBody>

        <TxtBody
          style={[
            styles.logsTitle,
            {
              color: t.colors.title,
              borderBottomColor: t.colors.psBorder,
              borderBottomWidth: 1,
            },
          ]}
        >
          Logs
        </TxtBody>
      </Container>

      {/* Log */}

      <Box style={[{
        flex:8,
      }]}>
        <LogScreen />
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 2,
  },
  titleTxt: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },
  logBtnContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },

  logBtn: {
    width: "100%", // full width of parent
    borderRadius: 0, // optional: removes rounded corners if your button adds them
  },

  logsTitle: {
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 12,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    paddingBottom: 8,
  },
});
