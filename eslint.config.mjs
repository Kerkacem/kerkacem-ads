import js from "@eslint/js";
import ts from "typescript-eslint";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    ignores: ["**/dist/**", "**/.next/**", "**/node_modules/**", "**/server/**"],
  },
  ...ts.configs.recommended,
  {
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
];
