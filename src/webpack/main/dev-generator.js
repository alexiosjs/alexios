import * as configModule from "../config-module";

/**
 * @description 开发环境配置
 *
 * @param {object} props
 * @param {number} props.port 端口号
 * @param {boolean} props.open 自动打开浏览器
 *
 * @return {object} webapckDevConfig
 */
const devGenerator = props => {
  const { port, open } = props;
  // webpack.mode
  const mode = "development";
  // webpack.entry
  const entry = configModule.entry();
  // webpack.resolve
  const resolve = configModule.resolve();
  // webpack.output
  const output = configModule.output();
  // webpack.devServer
  const devServer = { ...configModule.devServer(), port, open };
  // webpack.externals
  const externals = configModule.externals();
  // webpack.devtool
  const devtool = configModule.devtool();
  // webpack.plugins
  const plugins = [
    ...configModule.commonPlugins(),
    ...configModule.devPlugins({ port }),
  ];
  // webpack.module
  const module = configModule.module();

  const webpackConfig = {
    mode,
    entry,
    resolve,
    output,
    devServer,
    externals,
    devtool,
    plugins,
    module,
  };

  return webpackConfig;
};

export default devGenerator;
