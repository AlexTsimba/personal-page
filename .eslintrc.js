module.exports = {
  extends: [ 'airbnb-typescript', 'next/core-web-vitals', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
  },
};
