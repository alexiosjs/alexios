import projectPath from "../utils/project-path";
import getRcConfig from "../utils/get-rc-config";
import ProgressBar from "webpack-progress-bar";
import HtmlPlugin from "html-webpack-plugin";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import webpack from "webpack";
import path from "path";
import fs from "fs-extra";

/**
 * webpack.entry
 * 默认无vendor
 */
export const entry = () => {
  return (
    getRcConfig("entry") || {
      // 入口
      main: projectPath("src/index"),
    }
  );
};

/**
 * @description webpack.resolve
 * resolve中的配置不建议扩展
 */
export const resolve = () => {
  return {
    // 支持省略的拓展名
    extensions: Array.from(
      new Set(
        [".js", ".ts", ".jsx", ".tsx"].concat(
          getRcConfig("resolveExtraExtensions") || []
        )
      )
    ),
    // 文件夹主文件名
    mainFiles: ["index"],
    // 设置别名
    alias: getRcConfig("alias") || {},
  };
};

/**
 * @description webpack.output
 */
export const output = () => {
  return {
    // 输出路径
    path: getRcConfig("outputPath") || projectPath("dist"),
    // 输出文件名，可选是否关闭hash模式
    filename:
      getRcConfig("disableHash") === true ? "bundle.js" : "bundle_[hash:16].js",
    // 公共代码块
    chunkFilename:
      getRcConfig("disableHash") === true
        ? "[name].js"
        : "[name]_[chunkHash:8].js",
    // 公共资源路径, 解决请求url资源404的问题
    publicPath: getRcConfig("publicPath") || "/",
  };
};

/**
 * @description webpack.devServer
 */
export const devServer = () => {
  return {
    inline: true, // 内联模式
    historyApiFallback: true,
    allowedHosts: [],
    host: "localhost", // 服务器主机号
    stats: "none", // 只输出错误信息就可以了
    noInfo: true,
    overlay: {
      // 全屏展示错误信息
      errors: true,
      warnings: false,
    },
    proxy: getRcConfig("proxy") || {},
  };
};

/**
 * @description webpack.externals
 */
export const externals = () => {
  return getRcConfig("externals") || {};
};

/**
 * @description webpack.devtool
 */
export const devtool = () => {
  return getRcConfig("devtool") || "eval-source-map";
};

/**
 * @description webpack.module
 */
export const module = () => {
  return {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: [
          {
            loader: "awesome-typescript-loader",
            options: {
              configFileName: fs.existsSync(projectPath("tsconfig.json"))
                ? projectPath("tsconfig.json").replace(/\\/g, "/")
                : path
                    .resolve(__dirname, "../../templates/tsconfig.json")
                    .replace(/\\/g, "/"),
              silent: true,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|ttf|woff|svg|bmp|ico)$/,
        loader: "file-loader",
        options: {
          limit: 8192,
        },
      },
    ],
  };
};

/**
 * @description common plugins
 */
export const common_plugins = () => {
  return [
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
};

/**
 * @description development plugins
 *
 * @param {object} conf
 * @param {number} conf.port 端口号
 */
export const dev_plugins = conf => {
  return [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running at http://127.0.0.1:${conf.port}\n`,
          `Currently on development mode, to build your application, use \`alexios build\`\n`,
        ],
        notes: [],
      },
      clearConsole: getRcConfig("clearConsole") || true,
    }),
  ];
};
