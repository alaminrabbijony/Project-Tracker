import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "@shopify/restyle";

import { router, Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function Layout() {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.colors.navBg,
        },
        headerTintColor: theme.colors.headerTint,
      }}
    >
      <Stack.Screen
        name="[id]"
        options={{
          headerLeft: () => (
            <Ionicons
              onPress={() => router.replace("/")}
              name="chevron-back"
              size={32}
              color={theme.colors.headerTint}
            />
          ),
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({});
