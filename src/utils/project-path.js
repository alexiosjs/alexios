import path from "path";

/**
 * @description 获取项目实际根路径
 *
 * @param {string=} concatPath 需要拼接的路径
 *
 * @returns {string}  拼接路径
 */
const projectPath = concatPath => {
  const rootPath = process.cwd();
  if (concatPath) {
    return path.resolve(rootPath, concatPath);
  }
  return rootPath;
};

export default projectPath;
