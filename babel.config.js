module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@api': './src/services/apis',
          '@assets': './src/assets',
          '@components': './src/components',
          '@scenes': './src/scenes',
          '@screens': './src/screens',
          '@themes': './src/themes',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@layouts': './src/layouts',
          '@types': './src/types',
          '@toolkit': './src/toolkit',
          '@functions': './src/functions',
          '@interfaces': './src/interfaces',
        },
      },
    ],
  ],
};
