import { router } from "expo-router";
import { useEffect } from "react";

export default function HomeScreen() {
  useEffect(()=> {
    setTimeout(() => {
      router.replace('/(tabs)')
    }, 0);
  },[])
  return null
}
