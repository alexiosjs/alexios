"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var net = require("net");

function findFreePort(beg) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  var p = rest.slice(0, rest.length - 1),
      cb = rest[rest.length - 1];

  var _Array$from = Array.from(p),
      _Array$from2 = (0, _slicedToArray2["default"])(_Array$from, 3),
      end = _Array$from2[0],
      ip = _Array$from2[1],
      cnt = _Array$from2[2];

  if (!ip && end && !/^\d+$/.test(end)) {
    ip = end;
    end = 65534;
  } else {
    if (end == null) {
      end = 65534;
    }
  }

  if (cnt == null) {
    cnt = 1;
  }

  var retcb = cb;
  var res = [];

  var probe = function probe(ip, port, cb) {
    var s = net.createConnection({
      port: port,
      host: ip
    });
    s.on("connect", function () {
      s.end();
      cb(null, port + 1);
    });
    s.on("error", function (err) {
      cb(port);
    });
  };

  var onprobe = function onprobe(port, nextPort) {
    if (port) {
      res.push(port);

      if (res.length >= cnt) {
        retcb.apply(void 0, [null].concat(res));
      } else {
        setImmediate(function () {
          return probe(ip, port + 1, onprobe);
        });
      }
    } else {
      if (nextPort >= end) {
        retcb(new Error("No available ports"));
      } else {
        setImmediate(function () {
          return probe(ip, nextPort, onprobe);
        });
      }
    }
  };

  return probe(ip, beg, onprobe);
}

function findFreePortPmfy(beg) {
  for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    rest[_key2 - 1] = arguments[_key2];
  }

  var last = rest[rest.length - 1];

  if (typeof last === "function") {
    findFreePort.apply(void 0, [beg].concat(rest));
  } else {
    return new Promise(function (resolve, reject) {
      findFreePort.apply(void 0, [beg].concat(rest, [function (err) {
        for (var _len3 = arguments.length, ports = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          ports[_key3 - 1] = arguments[_key3];
        }

        if (err) reject(err);else resolve(ports);
      }]));
    });
  }
}

var _default = findFreePortPmfy;
exports["default"] = _default;