// eslint.config.js
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import { defineConfig } from "eslint/config";
import expoConfig from "eslint-config-expo/flat.js"; // ✅ FIXED (added .js)

export default defineConfig([
  ...expoConfig,

  {
    ignores: ["dist/*"],

    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },

    plugins: {
      prettier: prettierPlugin,
    },

    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": "warn",
      "import/no-unresolved": "error",
    },
  },
]);
