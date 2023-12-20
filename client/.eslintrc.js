const isProd = process.env.NODE_ENV === 'production'
const warnInDev = isProd ? 'error' : 'warn'

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    commonjs: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],

  rules: {
    //*** ESLINT-PLUGIN-IMPORT RULES ***//

    // Split dependencies import/require statements in groups

    'no-restricted-imports': [
      warnInDev,
      {
        paths: [
          {
            name: 'lodash',
            message:
              'Please import the default export from the lodash/<module> you want to use, to save on bundle size',
          },
        ],
        patterns: ['!lodash/*'],
      },
    ],

    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent'],
          ['sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],

    // Prevent separate import statements from the same module
    'import/no-duplicates': warnInDev,

    // Prevent circular dependencies
    'import/no-cycle': warnInDev,

    // Prevent default exports
    'import/no-default-export': warnInDev,

    //*** ESLINT OFFICIAL RULES ***//

    'no-implicit-coercion': warnInDev,
    'no-new-wrappers': warnInDev,
    'no-new-object': warnInDev,
    'object-shorthand': warnInDev,
    'no-array-constructor': warnInDev,
    'no-new-func': warnInDev,
    'no-eval': warnInDev,
    'no-implied-eval': warnInDev,
    eqeqeq: warnInDev,
    radix: warnInDev,
    // 'consistent-return': warnInDev,

    //*** GENERAL RULES ***//

    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': warnInDev,

    // Ensure that switch statements always has a default clause
    'default-case': warnInDev,

    // Ensure that default clause in switch statement is last
    'default-case-last': warnInDev,

    // Prevent usage of console.log, alert, prompt and confirm
    'no-console': warnInDev,

    //*** TYPESCRIPT RULES ***//

    // Prevent usage of interface
    '@typescript-eslint/consistent-type-definitions': [warnInDev, 'type'],

    // Always use array syntax for array types
    '@typescript-eslint/array-type': warnInDev,
    // Enforces consistent usage of type imports
    '@typescript-eslint/consistent-type-imports': warnInDev,

    // Enforce the use of the record type for objects
    '@typescript-eslint/consistent-indexed-object-style': warnInDev,

    //*** REACT RULES ***//
    // Prevent strings in markup
    // 'react/jsx-no-literals': [warnInDev, { allowedStrings: ['.'] }], //Should enable this when we've implemented i18n

    // Disallow unnecessary fragments
    // 'react/jsx-no-useless-fragment': [warnInDev, { allowExpressions: true }],

    // Prevent extra closing tags for components without children
    'react/self-closing-comp': [
      warnInDev,
      {
        component: true,
        html: true,
      },
    ],

    // Ensures using function declarations for components only
    'react/function-component-definition': [
      warnInDev,
      {
        namedComponents: 'function-declaration',
      },
    ],

    //*** DISABLED RULES ***//
    'no-case-declarations': 'off',
    'no-extra-boolean-cast': 'off',

    // Disable check for React import
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    'react/no-unescaped-entities': 'off', // Should not be needed when we have i18n in place.
    // Disable component display name check
    'react/display-name': ['off'],

    //TEMP
    'react/jsx-key': warnInDev,
    'react/prop-types': warnInDev,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': warnInDev,
    'react-hooks/exhaustive-deps': 'off',
    'import/no-unresolved': 'off',
    'react/no-deprecated': 'off',
  },
}
