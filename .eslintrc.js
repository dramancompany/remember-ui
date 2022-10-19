const path = require('path');

module.exports = {
  extends: [
    'react-app',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // react
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/destructuring-assignment': 0,
    'react/no-unused-state': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-wrap-multilines': 0,
    'react/require-default-props': 0,
    'react/no-unescaped-entities': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    // 웹 접근성
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/media-has-caption': 0,
    // Javascript
    'arrow-body-style': ['error', 'as-needed'],
    'consistent-return': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'no-async-promise-executor': 0,
    'no-restricted-syntax': 0,
    'no-await-in-loop': 0,
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: false,
      },
    ],
    // Module
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling'],
        ],
        pathGroups: [
          {
            pattern: 'global-style/**',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: './*.constant',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: './*.text',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: './*.styles',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: './*.scss',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: './*.css',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: 'assets/**',
            group: 'sibling',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    // typescript eslint
    '@typescript-eslint/no-unused-expressions': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
  },
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, 'src')],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  ignorePatterns: ['vite.config.ts'],
};
