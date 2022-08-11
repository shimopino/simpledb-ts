/** @type {import("eslint/lib/shared/types").ConfigData} */
const config = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  ignorePatterns: [".eslintrc.js", "jest.config.js", ".prettierrc.js"],
  root: true,
};

module.exports = config;
