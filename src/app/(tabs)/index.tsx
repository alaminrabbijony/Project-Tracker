import Card from "@/comp/general/Card";
import { Container, ScrollView } from "@/comp/general/RestyleComp";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";

export default function Index() {
  const theme = useTheme();
  return (
    <Container
      style={[styles.root, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView>
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  //main
  root: {
    //backgroundColor: Color.bg200,
    //backgroundColor: "#2C2C2C",
  },
});
