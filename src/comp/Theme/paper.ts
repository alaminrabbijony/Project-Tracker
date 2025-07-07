import {
  MD3LightTheme as DefaultTheme,
  MD3LightTheme,
} from "react-native-paper";

export const Theme: typeof DefaultTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#FF4949",
    secondary: "#27391C",
    background: "#E0E4D7"
  },
};