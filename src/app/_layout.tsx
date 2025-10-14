import ErrorBoundary from "@/comp/ErrorBoundary";
import { Stack } from "expo-router";
import { ThemeProvider } from "../comp/Theme/ThemeProvider";

export default function RootLayout() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="projects/[id].tsx" options={{ headerShown: false }} />
          <Stack.Screen name="process/[id].tsx" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
