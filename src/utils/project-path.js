import path from "path";

/**
 * @description 获取项目实际根路径
 *
 * @param {string=} concat_path 需要拼接的路径
 *
 * @returns {string}  拼接路径
 */
const projectPath = concat_path => {
  const root_path = process.cwd();
  if (concat_path) {
    return path.resolve(root_path, concat_path);
  }
  return root_path;
};

export default projectPath;
