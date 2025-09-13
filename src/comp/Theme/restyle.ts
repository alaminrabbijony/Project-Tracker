// theme.ts
import { createTheme } from "@shopify/restyle";

export const baseTheme = createTheme({
  colors: {
    primary: "#B0DB9C",
    secondary: "#FF4949",
    background: "#ffffff",

    card: "#f6f6f6",
    text: "black",
    border: "#DA6C6C",

    //Nav Colors
    //navBg: '#2C3930',
    navBg: "#B0DB9C",
    //headerTint: '#FF0000',
    headerTint: "#000000",
    iconColor: "#758079",
    //iconTintActiveColor: '#FF0000',
    iconTintActiveColor: "#000000",
    navBodyBorder: "#758079",

    //Card Colors:
    //title: '#2C3930',
    plain: "#111",
    title: "#B0DB9C",
    cardBg: "#2C3930",
    logBg: "white",
    logTxt: "#000000",

    //Txt input
    inputBg: "#EEEFE0",
    inputBorder: "#B0DB9C",
    inputColor: "#000000",

    //Modal BG
    modalBgColor: "#B0DB9C",

    //Project Screen
    psBorder: "black",
    createProcessBtnBg: "white",
    pressedCpBg: "#f6f6f6",
    psListCardBg: "#F6F6F6",
    //psCard
    pscBg: "white",
    pscBorder: "#9EBC8A",
    pscBorderBg: "#F6F6F6",
    pscTxt: "black",
    pscTxtSub: "#111",
    pscSideBorder: "#9EBC8A",
    pscSideBorderBg: "#9EBC8A",

       //Logs Chat
    logsOuter: "#9EBC8A",
    logsInner: "#111",
    logsBg: "#EEEFE0",
    logPrimary:"#9EBC8A",
    logsSecondary: '#2C3930',
    iconBtn: "black",
   
    
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
      color: "text",
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
    },
    body: {
      fontSize: 16,
      color: "text",
    },
  },
  breakpoints: {},
});

export const lightTheme = baseTheme;

export const darkTheme = createTheme({
  ...baseTheme,
  colors: {
    primary: "#B0DB9C",
    secondary: "#FF4949",
    // background: '#121212',
    background: "#2C3930",
    bg2: "#2C2C2C",
    // background: '#1F7D53',
    //  navBg: '#27391C',
    bg100: "#2C3930",
    bg200: "#3F4F44",
    g100: "#B0DB9C",
    dg100: "#0A400C",
    b100: "#2C2C2C",

    //Nav
    headerTint: "#B0DB9C",
    //navBg: '#2C2C2C',
    navBg: "black",
    navBodyBorder: "black",
    iconTintActiveColor: "#B0DB9C",
    iconColor: "#758079",
    card: "#1e1e1e",
    text: "#ffffff",
    border: "#9EBC8A",

    //Card Colors:
    title: "#B0DB9C",
    
    plain: "#f6f6f6",
    cardBg: "#2C3930",
    logBg: "black",
    logTxt: "#ffffff",

    //Txt input
    inputBg: "#2C3930",
    inputBorder: "#2C3930",
    inputColor: "#ffffff",
    //modal
    modalBgColor: "#2C3930",

    //Project Screen
    psBorder: "#9EBC8A",
    createProcessBtnBg: "black",
    pressedCpBg: "#111",
    psListCardBg: "#111",
    //psCard
    pscBg: "black",
    pscBorder: "#9EBC8A",
    pscBorderBg: "#111",
    pscTxt: "white",
    pscTxtSub: "#ccc",
    pscSideBorder: "#9EBC8A",
    pscSideBorderBg: "#9EBC8A",

    //Logs Chat
    logsOuter: "#9EBC8A",
    logsInner: "#2C3930",
    logsBg: "#3F4F44",
    //chatScreen
    chatScreenBg: "#2C3930",
    chatFooterBg: "#2C3930",
    chatFooterBorder: "#9EBC8A",
    chatInput: "#3F4F44",
    chatInputColor: 'white',
    logPrimary: "black",
    logsSecondary: "#9EBC8A",
    iconBtn: "#9EBC8A",
   
  },
});

export type Theme = typeof lightTheme;
