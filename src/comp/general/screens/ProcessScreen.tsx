import React from "react";
import { StyleSheet } from "react-native";
import Btn from "../Btn";
import { Container, TxtBody, TxtTitle } from "../RestyleComp";

type ProcessScreenProps = {
    name: string;
}

export default function ProcessScreen({ name }: ProcessScreenProps) {
  return (
    <>
      <Container style={[styles.headerContainer]}>
        <TxtTitle style={styles.pTxt}>{name}</TxtTitle>
        <TxtBody>Date: 21/07/2025</TxtBody>
        <Btn >Add Process</Btn>
      </Container>
      <Container style={styles.bodyContainer}>
        <TxtBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        </TxtBody>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    width: "100%",
    borderWidth: 5,
  },
  bodyContainer: {
    backgroundColor: 'black'
  },
  pTxt: {
    fontSize: 36,
    
  },
});
