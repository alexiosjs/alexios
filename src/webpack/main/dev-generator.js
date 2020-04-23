import getRcConfig from "../../utils/get-rc-config";
import * as config_module from "../config-module";

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
  const entry = config_module.entry();
  // webpack.resolve
  const resolve = config_module.resolve();
  // webpack.output
  const output = config_module.output();
  // webpack.devServer
  const devServer = { ...config_module.devServer(), port, open };
  // webpack.externals
  const externals = config_module.externals();
  // webpack.devtool
  const devtool = config_module.devtool();
  // webpack.plugins
  const plugins = [
    ...config_module.common_plugins(),
    ...config_module.dev_plugins({ port }),
  ];
  // webpack.module
  const module = config_module.module();

  const webpack_config = {
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

  return webpack_config;
};

export default devGenerator;
