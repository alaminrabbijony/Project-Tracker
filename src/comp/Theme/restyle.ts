// theme.ts
import { createTheme, color } from '@shopify/restyle';

export const baseTheme = createTheme({
  colors: {
    primary: '#27391C',
    secondary: '#FF4949',
    background: '#ffffff',
    card: '#f6f6f6',
    text: '#27391C',
    border: '#9EBC8A',
  },
  spacing: {
    none: 0,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
  },
  textVariants: {
    defaults: {
      fontSize: 16,
      color: 'text',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 16,
      color: 'primary'
    },
  },
  breakpoints: {},
});

export const lightTheme = baseTheme;

export const darkTheme = createTheme({
  ...baseTheme,
  colors: {
    primary: '#FF4949',
    secondary: '#FF4949',
    background: '#121212',
    card: '#1e1e1e',
    text: '#FF4949',
    border: '#DA6C6C',
  },
});

export type Theme = typeof lightTheme;
