"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _projectPath = _interopRequireDefault(require("./project-path"));

/**
 * @description 获取定义在alexiosrc中的配置项
 * @param {string=} name 配置项名称
 *
 * @return 配置项或全体配置
 */
var getRcConfig = function getRcConfig(name) {
  var rc_file_path = (0, _projectPath["default"])(".alexiosrc.js"); // rc文件是否存在

  var RC_EXSIST = _fsExtra["default"].pathExistsSync(rc_file_path); // 如果存在


  if (RC_EXSIST) {
    var rc_config = require(rc_file_path); // config / undefiend


    return name ? rc_config[name] : rc_config;
  } // 不存在


  return undefined;
};

var _default = getRcConfig;
exports["default"] = _default;