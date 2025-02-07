module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'next',
        'next/core-web-vitals',
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        // Add custom rules if needed
    },
};
