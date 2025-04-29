module.exports = {
    root: true,
    extends: [
        'next/core-web-vitals',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:security/recommended',
        'plugin:sonarjs/recommended',
    ],
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'security', 'sonarjs'],
    rules: {
        'react/react-in-jsx-scope': 'off', // Not needed in Next.js
        'react/prop-types': 'off', // Use TypeScript for props validation
        'react/jsx-uses-react': 'off', // Not needed with new JSX transform
        'sonarjs/cognitive-complexity': ['error', 20],
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton'],
            },
        ],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: ['plugin:@typescript-eslint/recommended'],
            rules: {
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    { argsIgnorePattern: '^_' },
                ],
                '@typescript-eslint/explicit-module-boundary-types': 'off',
            },
        },
    ],
};
