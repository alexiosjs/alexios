# Alexios

[查看英文版](./README.md)

## 为什么

Alexios 是一个使用最小的成本`快速开始`一个 React 项目的脚手架，几乎`零配置`，基于 `Webpack 4` 和 `Babel 7`，解决了 create-react-app 无法定制化等缺点。

## 文档

- [发布日志](./CHANGELOG.md)

## 功能

- 🌟 开箱即用，零配置即可快速开始。
- 🌟 包含 `dev`、`build` 和 `watch` 指令， 支持 babel, css-modules, mock, hmr 等功能。
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

const App = () => <>App</>;
ReactDOM.render(App, document.getElementById("root"));
```

```bash
## 启动开发服务器
> alexios dev

## 或

## 打包项目
> alexios build
```

## 指令

#### `alexios dev`

启动开发服务器

可选参数：

```bash
## 自定义端口号（如果被占用，会持续 +1， 直到找到空闲端口）
> alexios dev --port=9999

## 自动打开浏览器
> alexios dev --open=true
```

#### `alexios build`

打包项目

可选参数：

```bash
## 分析打包详情, 基于 BundleAnalyzerPlugin
> alexios build --analyze=true
```

#### `alexios watch`
