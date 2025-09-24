import { ThemeProvider as RestyleThemeProvider } from "@shopify/restyle";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme, Theme } from './restyle';

type ThemeMode = 'light' | 'dark';
type themeContextProps  = {
    theme: Theme;
    mode: ThemeMode;
    toggle: () => void;
    
}
const ThemeContext = createContext<themeContextProps>({
    theme: lightTheme,
    mode: 'light',
    toggle: () => {},
})

export function ThemeProvider({children} : {children: React.ReactNode}) {
    const colorScheme = useColorScheme()
    const [mode, setMode] = useState<ThemeMode>(colorScheme === 'dark' ? 'dark' : 'light')
    const [mannualOveride, setMannualOveride] = useState<boolean>()
  
    const theme = useMemo(() => {
        return mode === 'light' ? lightTheme : darkTheme;
    }, [mode]) //Prevent recomputation on every render:

    const toggle = () => {
      setMode((prev) => (prev === 'dark' ? 'dark' : 'light'))
      setMannualOveride(true)
    }
  
    useEffect(() => {
      if(!mannualOveride) setMode(colorScheme === 'dark' ? 'dark' : 'light')
    },[colorScheme,mannualOveride])


  return (
    <ThemeContext.Provider value={{ theme, mode, toggle }}>
      <RestyleThemeProvider theme={theme}>{children}</RestyleThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useToggleTheme = () => useContext(ThemeContext)

