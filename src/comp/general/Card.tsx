import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";
import { Container, TxtBody, TxtTitle } from "./RestyleComp";

export default function Card() {
  const theme = useTheme();
  return (
    <Container style={[styles.card, { backgroundColor: theme.colors.cardBg }]}>
      <TxtTitle style={[styles.cardTitle, { color: theme.colors.title }]}>
        Project Name
      </TxtTitle>
      <TxtBody style={[styles.cardDateTxt, { color: theme.colors.plain }]}>
        Date: 11-07-2025
      </TxtBody>
      <TxtBody style={[styles.cardProcessTxt, { color: theme.colors.title }]}>
        Process: Latest Process
      </TxtBody>

      <Container style={[styles.logContainer, { backgroundColor: theme.colors.logBg }]}>
        <TxtBody style={[styles.logHeading, { color: theme.colors.logTxt }]}>Log</TxtBody>
        <TxtBody style={[styles.logTxt, { color: theme.colors.logTxt }]}>
          This is the last log for the Project name Something which is nothing
        </TxtBody>
      </Container>
    </Container>
  );
}

const styles = StyleSheet.create({
  //card
  card: {
    // backgroundColor: Color.b100,
    borderColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    marginVertical: 6,
  },
  cardTitle: {
    fontSize: 24,
    marginBottom: 6,
  },

  cardDateTxt: {
    fontSize: 12,
    //fontWeight:'light'
    marginBottom: 6,
  },
  cardProcessTxt: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 6,
  },
  logContainer: {
    //backgroundColor: "black",
    justifyContent: "center",
    borderRadius: 24,
  },
  logHeading: {
    fontWeight: "bold",
  },
  logTxt: {},
});
