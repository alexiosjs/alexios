# Alexios

[查看英文版](./README.md)

Alexios 是一个使用最小的成本快速开始一个 react 项目的脚手架，几乎零配置，基于 webpack 4 和 babel 7，解决了 create-react-app 无法定制化等缺点。

## 文档

- [发布日志](./CHANGELOG.md)

## 功能

- 🌟 开箱即用，零配置即可快速开始。
- 🌟 包含 dev 和 build 指令， 支持 babel, css-modules, mock, hmr 等功能。
- 🌟 JSON 模式的配置化方式， 最大程度保留 webpack 的 api， 暴露出 JS 接口应付额外的拓展需求。
- 🌟 友好的图形化控制台和错误信息展示。

## 快速开始

```bash
## 本地安装依赖（不推荐全局安装）
> npm install alexios --save-dev
```

```bash
## 安装 react 和 react-dom
> npm install react react-dom --save-dev
```

```javascript
// 写入 src/index.js
import ReactDOM from "react-dom";

const App = () => <>App</> ReactDOM.render(App, document.getElementById("root"))
```

```bash
## 启动开发服务器
> alexios dev

## 或

## 打包项目
> alexios build
```
