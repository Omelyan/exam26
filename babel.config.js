module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: './sources',
        rootPathPrefix: '~/',
      },
    ],
    'react-native-reanimated/plugin',
    // ...
  ],
};
