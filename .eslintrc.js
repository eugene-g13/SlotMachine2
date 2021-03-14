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
        'plugin:sonarjs/recommended',
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
    plugins: ['react', '@typescript-eslint', 'react-hooks', 'sonarjs', 'import', 'promise'],
    rules: {
        // "@typescript-eslint/no-unused-vars": "error",
        // "no-unused-vars": "off"
        //'no-const-assign': 'warn',
        indent: 'off', // indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        '@typescript-eslint/indent': ['error', 4],

        'linebreak-style': ['error', 'windows'],

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'destructuring-assignment': 'off',

        'arrow-parens': ['error', 'as-needed'],
        'react/button-has-type': 'off',
        'react/prop-types': 0,
        'object-curly-newline': 'off',
        'operator-linebreak': 0,
        'arrow-body-style': 0,
        'react/jsx-one-expression-per-line': 0,
        'no-plusplus': 0,
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'off',

        // "sonarjs/cognitive-complexity": "error",
        // "sonarjs/no-identical-expressions": "error"
        // "sonarjs/cognitive-complexity": ["warn", 4],
        // "max-lines-per-function": ["warn", 30]
    },
};
