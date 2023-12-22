node_modules
/build


module.exports = {

    env: { browser: true, es2020: true, node: true },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parser: {
        ecmaVersion: 'es2016',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
  }
