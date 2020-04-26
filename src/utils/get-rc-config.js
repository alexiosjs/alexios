import fs from "fs-extra";
import projectPath from "./project-path";

/**
 * @description 获取定义在alexiosrc中的配置项
 * @param {string=} name 配置项名称
 *
 * @return 配置项或全体配置
 */
const getRcConfig = name => {
  const rcFilePath = projectPath(".alexiosrc.js");
  // rc文件是否存在
  const RC_EXSIST = fs.pathExistsSync(rcFilePath);
  // 如果存在
  if (RC_EXSIST) {
    const rcConfig = require(rcFilePath);
    // config / undefiend
    return name ? rcConfig[name] : rcConfig;
  }
  // 不存在
  return undefined;
};

export default getRcConfig;
