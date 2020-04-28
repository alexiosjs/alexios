import React from "react";
import ReactDOM from "react-dom";

function Alexios(props = {}) {
  this.elementId = props.elementId || "root";
  this.Node = props.node;
}

Alexios.prototype.launch = function () {
  const { elementId, Node } = this;
  const root = document.getElementById(elementId);
  if (!root) {
    throw new Error(
      `There is no element with id '${elementId}' in HTML template!`
    );
  }
  if (!Node) {
    throw new Error(
      `Missing attribute 'node', the root React Component/Function Component.`
    );
  }
  ReactDOM.render(<Node />, root);
};

export default Alexios;
