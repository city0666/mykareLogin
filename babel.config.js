module.exports = {
  presets: ['module:@react-native/babel-preset'],

  plugins: [
    // 'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@app/assets': './App/src/assets',
          '@app/components': './App/src/components',
          '@app/constants': './App/src/constants',
          '@app/screen': './App/src/screen',
          '@app/navigations': './App/src/navigations',
          '@app/quarys': './App/src/quarys',
          '@app/utils': './App/src/utils',
          '@app/config': './App/src/config',
          '@app/services': './App/src/services',
          '@app/apis': './src/apis',
          '@app/hooks': './App/src/hooks',
          '@app/query': './src/query',
          '@app/recoils': './App/src/recoils',
        },
      },
      // 'react-native-reanimated/plugin',
      // , {
      //     relativeSourceLocation: true,
      // },
    ],
    // 'react-native-reanimated/plugin',
  ],
};
