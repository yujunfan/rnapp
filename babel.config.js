module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          components: './src/components',
          screens: './src/screens',
          services: './src/services',
          assets: './src/assets',
          navigation: './src/navigation',
          utils: './src/utils',
          stores: './src/stores',
        },
      },
    ],
  ],
};
