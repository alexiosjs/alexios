"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _getRcConfig = _interopRequireDefault(require("../../utils/get-rc-config"));

var config_module = _interopRequireWildcard(require("../config-module"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * @description 开发环境配置
 *
 * @param {object} props
 * @param {number} props.port 端口号
 * @param {boolean} props.open 自动打开浏览器
 *
 * @return {object} webapckDevConfig
 */
var devGenerator = function devGenerator(props) {
  var port = props.port,
      open = props.open; // webpack.mode

  var mode = "development"; // webpack.entry

  var entry = config_module.entry(); // webpack.resolve

  var resolve = config_module.resolve(); // webpack.output

  var output = config_module.output(); // webpack.devServer

  var devServer = _objectSpread({}, config_module.devServer(), {
    port: port,
    open: open
  }); // webpack.externals


  var externals = config_module.externals(); // webpack.devtool

  var devtool = config_module.devtool(); // webpack.plugins

  var plugins = [].concat((0, _toConsumableArray2["default"])(config_module.common_plugins()), (0, _toConsumableArray2["default"])(config_module.dev_plugins({
    port: port
  }))); // webpack.module

  var module = config_module.module();
  var webpack_config = {
    mode: mode,
    entry: entry,
    resolve: resolve,
    output: output,
    devServer: devServer,
    externals: externals,
    devtool: devtool,
    plugins: plugins,
    module: module
  };
  return webpack_config;
};

var _default = devGenerator;
exports["default"] = _default;