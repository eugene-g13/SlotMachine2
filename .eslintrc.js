module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    //"plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "import",
    "plugin:promise/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'promise'
  ],
  rules: {
    // "@typescript-eslint/no-unused-vars": "error",
    // "no-unused-vars": "off"
  }
}
