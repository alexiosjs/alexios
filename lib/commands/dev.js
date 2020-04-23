"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _chalk = _interopRequireDefault(require("chalk"));

var _defaultSetting = _interopRequireDefault(require("../config/default-setting"));

var _portUsage = _interopRequireDefault(require("../utils/port-usage"));

var _main = require("../webpack/main");

var _webpack = _interopRequireDefault(require("webpack"));

var _webpackDevServer = _interopRequireDefault(require("webpack-dev-server"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 检查端口情况，返回空闲端口
 */
var portCheck = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(port) {
    var custom_port_number, EMPTY_PORT;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // 自定义端口号
            custom_port_number = Number(port); // 端口号非法

            if (!custom_port_number) {
              console.log(_chalk["default"].red("Illegal port [".concat(port, "] !\n"))); // 结束进程

              process.exit(0);
            } // 检查端口号占用情况


            console.log(_chalk["default"].green("Checking the usage on port [".concat(custom_port_number, "]...\n"))); // 获取空闲端口

            _context.next = 5;
            return (0, _portUsage["default"])(custom_port_number);

          case 5:
            EMPTY_PORT = _context.sent;
            // 成功
            console.log(_chalk["default"].cyan("Port [".concat(EMPTY_PORT, "] is available, starting now...\n")));
            return _context.abrupt("return", EMPTY_PORT);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function portCheck(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(argv) {
    var _argv$port, port, _argv$open, open, EMPTY_PORT, webpack_dev_config, compiler, dev_server;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _argv$port = argv.port, port = _argv$port === void 0 ? _defaultSetting["default"].PORT : _argv$port, _argv$open = argv.open, open = _argv$open === void 0 ? _defaultSetting["default"].OPEN : _argv$open;
            _context2.next = 3;
            return portCheck(port);

          case 3:
            EMPTY_PORT = _context2.sent;
            webpack_dev_config = (0, _main.webpackDev)({
              port: Number(EMPTY_PORT),
              open: open === "true"
            });
            compiler = (0, _webpack["default"])(webpack_dev_config);
            dev_server = new _webpackDevServer["default"](compiler, _objectSpread({}, webpack_dev_config.devServer));
            dev_server.listen(webpack_dev_config.devServer.port);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports["default"] = _default;