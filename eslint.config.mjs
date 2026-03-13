import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  {
    ignores: ["**/node_modules/**", "**/.next/**", "lib/generated/prisma/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
];
