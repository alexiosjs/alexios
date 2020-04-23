"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _yargs = _interopRequireDefault(require("yargs"));

var _chalk = _interopRequireDefault(require("chalk"));

var _commands = _interopRequireDefault(require("../commands"));

var _console = console,
    log = _console.log;

var alexios = function alexios() {
  return _yargs["default"].command("dev", "Start the development server.", /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
      var argv;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              argv = _ref.argv;
              log(_chalk["default"].cyan("Starting the development server...\n"));
              _context.next = 4;
              return _commands["default"].dev(argv);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }()).command("build", "Package your application.", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            log(_chalk["default"].cyan("Building the application...\n"));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }))).command("watch", "Watch your file system change.", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            log(_chalk["default"].cyan("Watch your file system change...\n"));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }))).argv;
};

var _default = alexios();

exports["default"] = _default;