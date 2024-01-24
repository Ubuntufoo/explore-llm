module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'eslint-comments'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  
    rules: {
      'header/header': [
        'error',
        'block',
        [
          '*',
          {
            pattern: '^\\s*/\\*\\*',
            lineComments: ' *',
            blockComments: '*',
          },
        ],
        [
          ' *',
          ' * @file Overview of the file',
          ' * @author Your Name',
          ' */',
        ],
      ],
    },
  }
};
