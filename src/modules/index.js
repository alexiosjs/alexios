import React from "react";
import ReactDOM from "react-dom";

/**
 * Alexios App - Alexio 启动器
 * @constructor
 * @param {object} props
 * @param {string=} props.elementId root element id - 根元素的id
 * @param {any} props.node React Component - React 组件
 */
function Alexios(props = {}) {
  this.elementId = props.elementId || "root";
  this.Node = props.node;
}

Alexios.prototype.launch = function () {
  const { elementId, Node } = this;
  const root = document.getElementById(elementId);
  if (!root)
    throw new Error(
      `There is no element with id '${elementId}' in HTML template.`
    );
  if (!Node)
    throw new Error(
      `Missing attribute 'node', the root React Component/Function Component.`
    );

  ReactDOM.render(<Node />, root);
};

export default Alexios;
