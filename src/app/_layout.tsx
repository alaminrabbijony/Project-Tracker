import { Stack } from "expo-router";
import { ThemeProvider } from "../comp/Theme/ThemeProvider";

export default function RootLayout() {
  return (
    <ThemeProvider>
       <Stack />
    </ThemeProvider>
  );
}
