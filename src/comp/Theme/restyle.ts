// theme.ts
import { createTheme } from '@shopify/restyle';

export const baseTheme = createTheme({
  colors: {
    primary: '#B0DB9C',
    secondary: '#FF4949',
    background: '#ffffff',
   
    card: '#f6f6f6',
    text: 'black',
    border:'#DA6C6C',


    //Nav Colors
    //navBg: '#2C3930',
    navBg: "#B0DB9C",
    //headerTint: '#FF0000',
    headerTint: '#000000',
    iconColor: '#758079',
    //iconTintActiveColor: '#FF0000',
    iconTintActiveColor: '#000000',
    navBodyBorder: '#758079',

        //Card Colors:
    //title: '#2C3930',
    plain: '#ffffff',
    title:  "#B0DB9C",
    cardBg: '#2C3930',
    logBg: 'white',
    logTxt: '#000000',


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
      color: 'text',
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
      bg2: '#2C2C2C',
   // background: '#1F7D53',
    //  navBg: '#27391C',
    bg100: "#2C3930",
    bg200: "#3F4F44",
    g100: '#B0DB9C',
    dg100: '#0A400C',
    b100: '#2C2C2C',

    //Nav
    headerTint: '#B0DB9C',
    //navBg: '#2C2C2C',
    navBg: 'black',
    navBodyBorder: 'black',
    iconTintActiveColor: '#B0DB9C',
    iconColor: '#758079',
    card: '#1e1e1e',
    text: '#ffffff',
    border: '#9EBC8A',

    //Card Colors:
    title: '#B0DB9C',
    plain: '#ffffff',
    cardBg:  "#2C3930",
    logBg: 'black',
    logTxt: '#ffffff'
  },
});

export type Theme = typeof lightTheme;
