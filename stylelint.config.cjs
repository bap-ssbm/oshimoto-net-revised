// stylelint.config.js
module.exports = {
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
      extends: ['stylelint-config-standard-scss'],
    },
    {
      files: ['**/*.astro'],
      customSyntax: 'postcss-html',
      extends: ['stylelint-config-html/astro'],
    },
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  ignoreFiles: [
    "node_modules/**/*.css",
    "dist/**/*.css",
  ],
  rules: {
    // 必要な共通ルール
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
    'scss/dollar-variable-pattern': null,
    'scss/at-mixin-pattern': null,
  },
};
