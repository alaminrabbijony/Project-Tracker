// src/utils/config.ts
import Constants from "expo-constants";

type Extra = {
  EXPO_PUBLIC_API_URL?: string;
  EXPO_PUBLIC_OTHER_KEY?: string;
};

// `Constants.expoConfig.extra` works in Expo Go & dev builds
// Fallback to `Constants.manifest.extra` for older SDKs
const extra = (Constants.expoConfig?.extra ??
  (Constants.manifest as any)?.extra) as Extra;

export const API_BASE_URL = extra.EXPO_PUBLIC_API_URL ?? "https://api.example.com";
export const OTHER_KEY = extra.EXPO_PUBLIC_OTHER_KEY ?? "";

console.log("🔧 Loaded ENV:", {
  API_BASE_URL,
  OTHER_KEY,
});
