import * as cm from "../config.modules";
import postProcess from "../../utils/config-post-process";

/**
 * @description 开发环境配置
 */
const buildGen = props => {
  const { ie, analysis } = props;
  // webpack.entry
  const entry = cm.entry({ ie });
  // webpack.resolve
  const resolve = cm.resolve();
  // webpack.output
  const output = cm.output();
  // webpack.externals
  const externals = cm.externals();
  // webpack.module
  const module = cm.module("production");
  // webpack.plugins
  const plugins = [...cm.commonPlugins(), ...cm.buildPlugin(analysis)];
  // webpack.optimization
  const optimization = cm.optimization();

  const config = {
    entry,
    resolve,
    output,
    externals,
    module,
    plugins,
    optimization,
  };

  postProcess(config);

  return config;
};

export default buildGen;
