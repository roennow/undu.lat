const html = require("@html-eslint/eslint-plugin");

module.exports = [
  {
    ... html.configs["flat/recommended"],
    files: ["**/*.html"],
  },
];
