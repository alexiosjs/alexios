"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _chalk = _interopRequireDefault(require("chalk"));

var _findFreePort = _interopRequireDefault(require("./find-free-port"));

var portUsage = function portUsage(port) {
  return new Promise(function (resolve) {
    (0, _findFreePort["default"])(port).then(function (_ref) {
      var _ref2 = (0, _slicedToArray2["default"])(_ref, 1),
          free_port = _ref2[0];

      if (free_port !== port) {
        var text = free_port - port <= 1 ? "".concat(port) : "".concat(port, " - ").concat(free_port - 1);
        console.log(_chalk["default"].yellow("Port [".concat(text, "] is occupied, switching to port [").concat(free_port, "]...\n")));
      }

      resolve(free_port);
    })["catch"](function (err) {
      console.log(err);
      process.exit(0);
    });
  });
};

var _default = portUsage;
exports["default"] = _default;