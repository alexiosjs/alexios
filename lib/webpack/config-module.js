"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dev_plugins = exports.common_plugins = exports.module = exports.devtool = exports.externals = exports.devServer = exports.output = exports.resolve = exports.entry = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _projectPath = _interopRequireDefault(require("../utils/project-path"));

var _getRcConfig = _interopRequireDefault(require("../utils/get-rc-config"));

var _webpackProgressBar = _interopRequireDefault(require("webpack-progress-bar"));

var _htmlWebpackPlugin = _interopRequireDefault(require("html-webpack-plugin"));

var _friendlyErrorsWebpackPlugin = _interopRequireDefault(require("friendly-errors-webpack-plugin"));

var _webpack = _interopRequireDefault(require("webpack"));

var _path = _interopRequireDefault(require("path"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * webpack.entry
 * 默认无vendor
 */
var entry = function entry() {
  return (0, _getRcConfig["default"])("entry") || {
    // 入口
    main: (0, _projectPath["default"])("src/index.js")
  };
};
/**
 * @description webpack.resolve
 * resolve中的配置不建议扩展
 */


exports.entry = entry;

var resolve = function resolve() {
  return {
    // 支持省略的拓展名
    extensions: Array.from(new Set([".js", ".ts", ".jsx", ".tsx"].concat((0, _getRcConfig["default"])("resolveExtraExtensions") || []))),
    // 文件夹主文件名
    mainFiles: ["index"],
    // 设置别名
    alias: (0, _getRcConfig["default"])("alias") || {}
  };
};
/**
 * @description webpack.output
 */


exports.resolve = resolve;

var output = function output() {
  return {
    // 输出路径
    path: (0, _getRcConfig["default"])("outputPath") || (0, _projectPath["default"])("dist"),
    // 输出文件名，可选是否关闭hash模式
    filename: (0, _getRcConfig["default"])("disableHash") === true ? "bundle.js" : "bundle_[hash:16].js",
    // 公共代码块
    chunkFilename: (0, _getRcConfig["default"])("disableHash") === true ? "[name].js" : "[name]_[chunkHash:8].js",
    // 公共资源路径, 解决请求url资源404的问题
    publicPath: (0, _getRcConfig["default"])("publicPath") || "/"
  };
};
/**
 * @description webpack.devServer
 */


exports.output = output;

var devServer = function devServer() {
  return {
    inline: true,
    // 内联模式
    historyApiFallback: true,
    allowedHosts: [],
    host: "localhost",
    // 服务器主机号
    stats: "none",
    // 只输出错误信息就可以了
    noInfo: true,
    overlay: {
      // 全屏展示错误信息
      errors: true,
      warnings: false
    },
    proxy: (0, _getRcConfig["default"])("proxy") || {}
  };
};
/**
 * @description webpack.externals
 */


exports.devServer = devServer;

var externals = function externals() {
  return (0, _getRcConfig["default"])("externals") || {};
};
/**
 * @description webpack.devtool
 */


exports.externals = externals;

var devtool = function devtool() {
  return (0, _getRcConfig["default"])("devtool") || "eval-source-map";
};
/**
 * @description webpack.module
 */


exports.devtool = devtool;

var _module = function module() {
  return {
    rules: [{
      test: /\.(ts|tsx)$/,
      exclude: /(node_modules|bower_components)/,
      loader: [{
        loader: "ts-loader"
      }]
    }, {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      loader: [{
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
        }
      }]
    }, {
      test: /\.(png|jpe?g|gif|ttf|woff|svg|bmp|ico)$/,
      loader: "file-loader",
      options: {
        limit: 8192
      }
    }]
  };
};
/**
 * @description common plugins
 */


exports.module = _module;

var common_plugins = function common_plugins() {
  return [new _webpackProgressBar["default"]({}), new _webpack["default"].HotModuleReplacementPlugin(), new _htmlWebpackPlugin["default"](_objectSpread({
    template: _path["default"].resolve(__dirname, "../index.html"),
    filename: "index.html",
    inject: true,
    title: "Alexios App"
  }, (0, _getRcConfig["default"])("html") || {}))];
};
/**
 * @description development plugins
 *
 * @param {object} conf
 * @param {number} conf.port 端口号
 */


exports.common_plugins = common_plugins;

var dev_plugins = function dev_plugins(conf) {
  return [new _friendlyErrorsWebpackPlugin["default"]({
    compilationSuccessInfo: {
      messages: ["Your application is running at http://127.0.0.1:".concat(conf.port, "\n"), "Currently on development mode, to build your application, use `alexios build`\n"],
      notes: []
    },
    clearConsole: (0, _getRcConfig["default"])("clearConsole") || true
  })];
};

exports.dev_plugins = dev_plugins;