"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

/**
 * @description 获取项目实际根路径
 *
 * @param {string=} concat_path 需要拼接的路径
 *
 * @returns {string}  拼接路径
 */
var projectPath = function projectPath(concat_path) {
  var root_path = process.cwd();

  if (concat_path) {
    return _path["default"].resolve(root_path, concat_path);
  }

  return root_path;
};

var _default = projectPath;
exports["default"] = _default;