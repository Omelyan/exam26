module.exports = {
  root: true,

  extends: [
    '@react-native',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],

  settings: {
    'import/resolver': {
      typescript: true,
    },
  },

  rules: {
    curly: ['error', 'multi-line', 'consistent'],
    //
  },
};
