"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

/**
 * Alexios App - Alexio 启动器
 * @constructor
 * @param {object} props
 * @param {string=} props.elementId root element id - 根元素的id
 * @param {any} props.node React Component - React 组件
 */
function Alexios() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.elementId = props.elementId || "root";
  this.Node = props.node;
}

Alexios.prototype.launch = function () {
  var elementId = this.elementId,
      Node = this.Node;
  var root = document.getElementById(elementId);
  if (!root) throw new Error("There is no element with id '".concat(elementId, "' in HTML template."));
  if (!Node) throw new Error("Missing attribute 'node', the root React Component/Function Component.");

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(Node, null), root);
};

var _default = Alexios;
exports["default"] = _default;