module.exports = {
    ignores: [
        'dist/**',
        'node_modules/**',
        'build/**',
        '**/*.test.js',
        '**/*.spec.js'
    ],
    rules: {
        'react/no-unescaped-entities': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-console': 'off',
        'no-unused-vars': 'off'
    }
};
