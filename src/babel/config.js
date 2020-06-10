import getRcConfig from "../utils/get-rc-config";

const extraBabelPlugins = getRcConfig("extraBabelPlugins") || [];
const extraBabelPresets = getRcConfig("extraBabelPresets") || [];

const babelConfig = {
  presets: ["alexios", "@babel/preset-typescript", ...extraBabelPresets],
  plugins: [...extraBabelPlugins],
  cacheDirectory: true,
};

export default babelConfig;
