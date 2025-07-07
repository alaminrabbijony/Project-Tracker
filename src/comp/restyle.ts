// components/restyle.ts
import { createBox, createText, createTheme } from '@shopify/restyle'


// Restyle
const lightColors = {
  background: "#E0E4D7",
  text: "#27391C",
  primary: "#FF4949",
}

const darkColors = {
  background: "#1E201E",
  text: "#E0E4D7",  // Adjusted for contrast with dark bg
  primary: "#FF4949",
}

// Shared theme structure
const baseTheme = {
  spacing: {
    none: 0,
    s: 8,
    m: 16,
    l: 24,
  },
  textVariants: {
    defaults: {
      fontSize: 16,
      color: "text",
    },
  },
}

// Now create both themes with shared structure
export const lightTheme = createTheme({
  ...baseTheme,
  colors: lightColors,
})

export const darkTheme = createTheme({
  ...baseTheme,
  colors: darkColors,
})

// Use any one (they have same shape) for typing
export type Theme = typeof lightTheme


export const Box = createBox<Theme>()
export const Text = createText<Theme>()
