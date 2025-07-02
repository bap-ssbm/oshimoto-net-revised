const js = require("@eslint/js");
const eslintPluginAstro = require("eslint-plugin-astro");
const eslintPluginTailwindcss = require("eslint-plugin-tailwindcss");

module.exports = [
  js.configs.recommended,
  ...eslintPluginAstro.configs["flat/recommended"],
  ...eslintPluginAstro.configs["flat/jsx-a11y-recommended"],
  {
    languageOptions: {
      // globalsを一時的に削除
      parserOptions: {
        extraFileExtensions: [".astro"],
      },
    },
  },
  {
    plugins: {
      tailwindcss: eslintPluginTailwindcss,
    },
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
  {
    ignores: [
      "node_modules/",
      ".astro/",
      "dist/",
      "public/",
      "package-lock.json",
      "yarn.lock",
      "vite.config.ts",
      "next.config.js",
      "tsconfig.json",
      "src/env.d.ts",
      ".github",
      ".stylelintrc",
      "*.cjs",
      "*.mjs",
    ],
  },
];
