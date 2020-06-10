import * as cm from "../config.modules";
import postProcess from "../../utils/config-post-process";

/**
 * @description 开发环境配置
 *
 * @param {object} props
 * @param {number} props.port 端口号
 * @param {boolean} props.open 自动打开浏览器
 * @param {boolean} props.mock 开启mock
 * @param {number} props.ie 兼容ie
 *
 * @return {object} webapckDevConfig
 */
const devGen = props => {
  const { port, open, mock, ie } = props;
  // webpack.mode
  const mode = "development";
  // webpack.entry
  const entry = cm.entry({ ie });
  // webpack.resolve
  const resolve = cm.resolve();
  // webpack.output
  const output = cm.output();
  // webpack.devServer
  const devServer = { ...cm.devServer({ mock }), port, open };
  // webpack.externals
  const externals = cm.externals();
  // webpack.devtool
  const devtool = cm.devTool();
  // webpack.module
  const module = cm.module(mode);
  // webpack.plugins
  const plugins = [...cm.commonPlugins(), ...cm.devPlugins({ port })];
  // webpack.optimization
  const optimization = cm.optimization();

  const config = {
    mode,
    entry,
    resolve,
    output,
    devServer,
    externals,
    devtool,
    module,
    plugins,
    optimization,
  };

  postProcess(config);

  return config;
};

export default devGen;
