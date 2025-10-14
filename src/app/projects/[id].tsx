import CreateProcessBtn from "@/comp/general/CreateProcess";
import ProcessCard from "@/comp/general/ProcessCard";
import { Container, ScrollView, TxtBody, TxtTitle } from "@/comp/general/RestyleComp";
import { useTheme } from "@shopify/restyle";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function ProjectScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const theme = useTheme();

  const onSubmit = () => {
    router.push(`/process/[id]`);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Project Details",
          headerStyle: {
            backgroundColor: theme.colors.navBg,
          },
          headerTitleAlign: "center",
          headerTintColor: theme.colors.headerTint,
        }}
      />

      <Container style={[styles.header]}>
        <TxtTitle style={[styles.title, { color: theme.colors.title }]}>
          Project Name
        </TxtTitle>
        <TxtBody style={[styles.date, { color: theme.colors.plain }]}>
          Date: 24/08/2025
        </TxtBody>
      </Container>
      <CreateProcessBtn onPress={onSubmit}>Create Process</CreateProcessBtn>
      <Container style={[styles.processList]}>
        <TxtTitle
          style={[
            styles.processTxt,
            {
              borderColor: theme.colors.psBorder,
              color: theme.colors.title,
            },
          ]}
        >
          Process
        </TxtTitle>
        <ScrollView
          style={[
            styles.processScreen,
            {
              backgroundColor: theme.colors.psListCardBg,
            },
          ]}
        >
          <ProcessCard />
          <ProcessCard />
          <ProcessCard />
          <ProcessCard />
        </ScrollView>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    padding: 20,
    borderBottomWidth: 1,
    height: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 20,
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  processList: {
    flex: 8,
    padding: 10,
  },
  processScreen: {
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
  },
  processTxt: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomWidth: 1,
  },
});
