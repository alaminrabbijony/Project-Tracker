import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from '@shopify/restyle';
import { router, Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { KeyboardProvider } from "react-native-keyboard-controller";

export default function Rootlayout() {
  const theme = useTheme()
  return (
    <KeyboardProvider>
      <Stack screenOptions={{ 
      title: "Logs",
      headerShown: true,
      headerStyle: {
          backgroundColor: theme.colors.navBg,
        },
        headerTintColor: theme.colors.headerTint,
     }}>
      <Stack.Screen
        name="logs"

        options={{
          
          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={32}
              color= {theme.colors.headerTint}
            />
          ),
        }}
      />
    </Stack>
    </KeyboardProvider>

 
  )
}

const styles = StyleSheet.create({})