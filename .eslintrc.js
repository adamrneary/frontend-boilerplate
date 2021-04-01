module.exports = {
  env: {
    browser: true,
    'cypress/globals': true,
    es2021: true,
    jest: true,
  },
  globals: {
    React: 'writable',
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'cypress', 'prettier'],
  overrides: [
    {
      files: ['**/cypress/**', '**/stories/**'],
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        'react-hooks/rules-of-hooks': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  rules: {
    // NextJs specific fix: suppress errors for missing 'import React' in files for nextjs
    'react/react-in-jsx-scope': 'off',

    // NextJs specific fix: Turning this off because next/link expects an invalid anchor
    'jsx-a11y/anchor-is-valid': 'off',

    // note: the following two lines are a pair. disable the general. enable the ts versio
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],

    // note: the following two lines are a pair. disable the general. enable the ts versio
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],

    // note: the following two lines are a pair. disable the general. enable the ts versio
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['warn'],

    'react/no-unused-prop-types': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/require-default-props': 'off',

    // This is firing becaues of our import process, but tsc would find real issues
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: [
          'node_modules',
          'src', // # <-- app root
        ],
      },
    },
  },
};
ew43``;
