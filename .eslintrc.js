module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        amd: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        //"plugin:react-hooks/recommended",
        //"plugin:@typescript-eslint/eslint-recommended",
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:promise/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks', 'import', 'promise'],
    rules: {
        // "@typescript-eslint/no-unused-vars": "error",
        // "no-unused-vars": "off"
        //'no-const-assign': 'warn',
        "indent": ["error", 4],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
};
