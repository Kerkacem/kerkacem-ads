import js from "@eslint/js";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    ignores: ["**/dist/**", "**/.next/**", "**/node_modules/**", "**/server/**"],
  },
  {
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
];
