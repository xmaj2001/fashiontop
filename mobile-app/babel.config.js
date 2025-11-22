// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        { 
          // Importante para o NativeWind:
          jsxImportSource: "nativewind" 
        }
      ],
      // Importante para o NativeWind:
      "nativewind/babel", 
    ],
    plugins: [
      // Se você estiver usando o Reanimated, ele deve ser o ÚLTIMO plugin
      // 'react-native-reanimated/plugin', 
    ],
  };
};
