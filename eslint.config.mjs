import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  ...nextVitals,
  prettier,
  {
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@next/next/no-img-element": "off",
    },
  },
  {
    files: ["src/domains/auth/hooks/useGoogleLogin.js"],
    rules: {
      "@next/next/no-location-assign-relative-destination": "off",
    },
  },

  globalIgnores([
    ".next/**",
    ".vercel/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "Sprint 4/**",
    "Sprint3/**",
    "sprint5/**",
    "dist/**",
  ]),
]);

export default eslintConfig;
