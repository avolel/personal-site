const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// `input` is the CSS entry Tailwind compiles; it must also be imported once at
// the app root (src/app/_layout.tsx) for the styles to be registered.
module.exports = withNativeWind(config, {
  input: "./src/global.css",
  inlineRem: 16,
});
