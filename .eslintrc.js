module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react', '@typescript-eslint', 'react-hooks'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/require-default-props': [0, {}],
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
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'arrow-body-style': ['off', 'always'],
    'jsx-quotes': ['error', 'prefer-single'],
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
  },

  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
