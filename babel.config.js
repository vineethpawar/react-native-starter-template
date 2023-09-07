module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@components': './lib/components',
          '@theme': './lib/theme',
          '@screens': './lib/screens',
          '@localization': './lib/localization',
          '@common': './lib/components/common',
          '@utils': './lib/utils',
          '@store': './lib/store',
          '@services': './lib/services',
          '@assets': './lib/assets',
          '@constants': './lib/constants',
          lib: './lib',
        },
      },
    ],
  ],
};
