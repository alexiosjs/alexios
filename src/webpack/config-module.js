import projectPath from "../utils/project-path";
import getRcConfig from "../utils/get-rc-config";
import ProgressBar from "webpack-progress-bar";
import HtmlPlugin from "html-webpack-plugin";
import webpack from "webpack";
import path from "path";

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
 * resolve中的配置不建议扩展
 */
export const resolve = {
  // 支持省略的拓展名
  extensions: Array.from(
    new Set([".js", ".ts", ".jsx", ".tsx"].concat(getRcConfig("resolveExtraExtensions") || []))
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
export const devServer = {
  inline: true, // 内联模式
  historyApiFallback: true,
  allowedHosts: [],
  host: "127.0.0.1", // 服务器主机号
  stats: "errors-only", // 只输出错误信息就可以了
  quiet: false, // 静默
  overlay: {
    // 全屏展示错误信息
    errors: true,
    warnings: false,
  },
  proxy: getRcConfig("proxy") || {},
};

/**
 * @description webpack.externals
 */
export const externals = getRcConfig("externals") || {};

/**
 * @description webpack.devtool
 */
export const devtool = getRcConfig("devtool") || "eval-source-map";

/**
 * @description webpack.module
 */
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      loader: [
        {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      ],
    },
  ],
};

/**
 * @description common plugins
 */
export const common_plugins = [
  new ProgressBar({}),
  new webpack.HotModuleReplacementPlugin(),
  new HtmlPlugin({
    template: path.resolve(__dirname, "../index.html"),
    filename: "index.html",
    inject: true,
    title: "Alexios App",
    ...(getRcConfig("html") || {}),
  }),
];
