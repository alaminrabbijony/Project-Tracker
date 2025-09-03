import { router } from "expo-router";
import { useEffect } from "react";

export default function HomeScreen() {
  useEffect(()=> {
    setTimeout(() => {
      router.replace('/process/[id]');
    }, 0);
  },[])
  return null

  // return(
  //   <ChatScreen/>
  // )
}
