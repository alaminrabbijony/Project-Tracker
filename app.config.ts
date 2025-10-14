// app.config.ts
import { ConfigContext, ExpoConfig } from "@expo/config";
import "dotenv/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  const EXPO_PUBLIC_API_URL =
    process.env.EXPO_PUBLIC_API_URL ?? "https://api.example.com";
  const EXPO_PUBLIC_OTHER_KEY = process.env.EXPO_PUBLIC_OTHER_KEY ?? "";

  return {
    ...config,
    name: config.name ?? "ProjectTracker",

    slug: config.slug ?? "ProjectTracker",
    extra: {
      ...config.extra,
      EXPO_PUBLIC_API_URL,
      EXPO_PUBLIC_OTHER_KEY,
    },
  } as ExpoConfig; // ✅ fixes TS type mismatch
};
