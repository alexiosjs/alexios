import fs from "fs-extra";
import projectPath from "./project-path";

/**
 * @description 获取定义在alexiosrc中的配置项
 * @param {string=} name 配置项名称
 *
 * @return 配置项或全体配置
 */
const getRcConfig = name => {
  const rcPath = projectPath(".alexiosrc.js");

  const RC_EXSIST = fs.pathExistsSync(rcPath);

  if (RC_EXSIST) {
    const rcConfig = require.resolve(rcPath);

    return name ? rcConfig[name] : rcConfig;
  }

  return undefined;
};

export default getRcConfig;
