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
  const entry = config_module.entry;
  // webpack.resolve
  const resolve = config_module.resolve;
  // webpack.output
  const output = config_module.output;
  // webpack.devServer
  const devServer = config_module;

  const webpack_config = {
    mode,
    entry,
    resolve,
    output,
  };
  console.log(webpack_config);
};

export default devGenerator;
