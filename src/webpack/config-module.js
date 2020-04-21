import projectPath from "../utils/project-path";
import getRcConfig from "../utils/get-rc-config";

/**
 * webpack.entry
 * 默认无vendor
 */
export const entry = getRcConfig("entry") || {
  // 入口
  main: projectPath("src/index.js"),
};

/**
 * @description webpack.resolve
 * resolve中的配置相当危险，不建议修改
 */
export const resolve = {
  // 支持省略的拓展名
  extensions: Array.from(
    new Set([".js", ".ts", ".jsx", ".tsx"].concat(getRcConfig("resolveExtraExtensions")))
  ),
  // 文件夹主文件名
  mainFiles: ["index"],
  // 设置别名
  alias: getRcConfig("alias") || {},
};

/**
 * @description webpack.output
 */
export const output = {
  // 输出路径
  path: getRcConfig("outputPath") || projectPath("dist"),
  // 输出文件名，可选是否关闭hash模式
  filename: getRcConfig("disableHash") === true ? "bundle.js" : "bundle_[hash:16].js",
  // 公共代码块
  chunkFilename: getRcConfig("disableHash") === true ? "[name].js" : "[name]_[chunkHash:8].js",
  // 公共资源路径, 解决请求url资源404的问题
  publicPath: getRcConfig("publicPath") || "/",
};

/**
 * @description webpack.devServer
 */
export const devServer = {};
