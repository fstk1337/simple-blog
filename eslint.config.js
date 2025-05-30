import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginTanstackQuery from "@tanstack/eslint-plugin-query";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      "@tanstack/query": pluginTanstackQuery
    },
    rules: {
      "@tanstack/query/exhaustive-deps": "error"
    }
  },
  {
    settings: {
      react: {
        version: "detect"
      }
    },
    plugins: {
      "eslint-plugin-react": pluginReact
    },
    rules: {
      "react/react-in-jsx-scope": "off"
    }
  }
]);