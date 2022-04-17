module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: '@typescript-eslint/parser'
    },
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended'],
    plugins: ['@typescript-eslint'],
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'object-curly-spacing': ['error', 'always']
    }
  }
  