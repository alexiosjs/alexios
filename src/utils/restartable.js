var cluster = require("cluster");

var _restartable = function (parClusterCode, parMainCode) {
  this.isRestartable = !cluster.isMaster;
  if (!this.isRestartable) {
    this._fork.apply(this);
    if (parMainCode) {
      parMainCode(this);
    }
  }
  if (this.isRestartable && parClusterCode) {
    parClusterCode(this);
  }
};

_restartable.prototype.restart = function () {
  if (this.isRestartable) {
    cluster.worker.kill();
  } else {
    this.clusterInstance.kill();
  }
};

_restartable.prototype._fork = function () {
  var self = this;
  this.clusterInstance = cluster.fork();
  this.clusterInstance.on("exit", function () {
    self._fork();
  });
};

var restartable = function (parClusterCode, parMainCode) {
  return new _restartable(parClusterCode, parMainCode);
};

module.exports = restartable;
