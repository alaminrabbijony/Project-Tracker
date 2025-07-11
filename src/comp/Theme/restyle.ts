// theme.ts
import { createTheme } from '@shopify/restyle';

export const baseTheme = createTheme({
  colors: {
    primary: '#B0DB9C',
    secondary: '#FF4949',
    background: '#ffffff',
    navBg: '#B0DB9C',
    card: '#f6f6f6',
    text: 'black',
    border:'#DA6C6C',
    //Nav Colors
    headerTint: '#FF0000',
    iconColor: '#758079',
    iconTintActiveColor: '#FF0000',
    navBodyBorder: '#758079',
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
    primary: '#B0DB9C',
    secondary: '#FF4949',
   // background: '#121212',
      background: '#2C3930',
   // background: '#1F7D53',
    //  navBg: '#27391C',
    

    //Nav
    headerTint: '#B0DB9C',
    navBg: '#2C2C2C',
    iconTintActiveColor: '#B0DB9C',
    iconColor: '#758079',
    card: '#1e1e1e',
    text: '#ffffff',
    border: '#9EBC8A',
  },
});

export type Theme = typeof lightTheme;
