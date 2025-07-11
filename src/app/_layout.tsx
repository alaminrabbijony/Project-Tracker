import { Stack } from 'expo-router';
import { ThemeProvider } from "../comp/Theme/ThemeProvider";

export default function RootLayout() {
  return (
    <ThemeProvider>
       <Stack screenOptions={{ }}>
          <Stack.Screen name='index' options={{ headerShown: false}} />
          <Stack.Screen name='(tabs)' options={{ headerShown: false}} />
          <Stack.Screen name='projects/[id].tsx' options={{ headerShown: false}} />
          <Stack.Screen name='process/[id].tsx' options={{ headerShown: false}} />
       </Stack>
    </ThemeProvider>
  );
}
