module.exports = {
  eslintConfig: {
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended",
    ],
    overrides: [
      {
        files: ["**/*.js?(x)"],
        rules: {
          "additional-typescript-only-rule": "warn",
        },
      },
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {
      "additional-rule": "warn",
    },
  },
}
