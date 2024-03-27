// eslint-disable-next-line no-undef
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'no-useless-escape': 'off',
    camelcase: 'off',
    'jest/no-conditional-expect': 'off',
    'import/prefer-default-export': 'off',
    'no-console': [
      1, // console.log can be commented (for debug) but will throw warning
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
};
