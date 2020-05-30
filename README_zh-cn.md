# Alexios

![NPM_VERSION](https://img.shields.io/npm/v/alexios.svg?style=flat) ![LICENSE](https://img.shields.io/github/license/alexiosjs/alexios) ![Build Status](https://www.travis-ci.org/alexiosjs/alexios.svg?branch=master&style=flat-square)

基于 `Webpack` 和 `babel` 的零配置、强大的轻量化 `React` 脚手架。

<img src="./logo.png" width="150px" />

[English](./README.md)

## 为什么

Alexios 是一个使用最小的成本`快速开始`一个 React 项目的脚手架，几乎`零配置`，基于 `Webpack 4` 和 `Babel 7`，提供愉快的开发体验。

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

```jsx
// 写入 src/index.js
import Alexios from "alexios";

const App = () => <h1>Hello World</h1>;

const alexios = new Alexios({
  node: App,
});

alexios.launch();
```

```bash
## 启动开发服务器
> alexios dev

## 或

## 打包项目
> alexios build
```

## 启动器

你可以使用 Alexios 内置的启动器快速渲染你的第一个 React 节点，也可以用任何你喜欢的方式来替代它，Alexios 的启动器只是为你提供了一个便捷的方式。

使用 Alexios 的启动器：

```jsx
// 引入Alexios启动器的构造函数
import Alexios from "alexios";

// 你的第一个节点
const App = () => <h1>Hellow World</h1>;

// 创建启动器实例
const alexios = new Alexios({
  node: App,
});

// 启动
alexios.launch();
```

启动器实例化参数：

| 名称      | 用途                       | 必填 |
| --------- | -------------------------- | ---- |
| elementId | 根元素的 id，默认为 `root` | 否   |
| node      | 根级 React 组件            | 是   |

启动器实例方法：

| 名称   | 用途 |
| ------ | ---- |
| launch | 启动 |

如果你不想使用 alexios 自带的启动器，可以这样做：

```jsx
import React from "react";
import ReactDOM from "react-dom";

const App = () => <h1>Hello World</h1>;

// 确认这个id确实存在于html中
ReactDOM.render(<App />, document.getElementById("root"));
```

## 指令

#### `alexios dev`

启动开发服务器。

可选参数：

```bash
## 自定义端口号（如果被占用，会持续 +1， 直到找到空闲端口）
> alexios dev --port=9999

## 自动打开浏览器
> alexios dev --open=true
```

#### `alexios build`

打包项目。

可选参数：

```bash
## 分析打包详情, 基于 BundleAnalyzerPlugin
> alexios build --analyze=true
```

#### `alexios watch`

监听文件或文件夹的改动, 执行自定义的指令或重启开发服务器。

```bash
## 监听单个文件，运行自定义指令。
> alexios watch --file=['src/index.js, node a.js']

## 监听单个文件，运行多个指令。
> alexios watch --file=['src/index.js, node a.js && node b.js']

## 监听多个文件。
> alexios watch --file=['src/index.js, node a.js', 'src/main.js, node a.js']

## 监听并重启开发服务器，使用特殊字符串 "$RESTART$"。
> alexios watch --file=['src/index.js, $RESTART$']

## 监听文件夹。
> alexios watch --folder=['src/pages, node a.js']
```

## 配置项

如果需要自定义配置项，写入`src/.alexiosrc.js`文件：

```javascript
module.exports = {
  // 可选参数
};
```

可选参数：

| 名称                                              | 描述                 |
| ------------------------------------------------- | -------------------- |
| [entry](#entry)                                   | 项目入口             |
| [resolveExtraExtensions](#resolveExtraExtensions) | 额外支持省略的拓展名 |
| [extraAlias](#extraAlias)                         | 设置路径别名         |
| [outputPath](#outputPath)                         | 打包输出路径         |
| [disableHash](#disableHash)                       | 禁用打包的 Hash      |
| [publicPath](#publicPath)                         | 公共资源路径         |
| [externals](#externals)                           | 打包排除项           |
| [devtool](#devtool)                               | 开发工具模式         |
| [html](#html)                                     | html 模板文件的配置  |
| [clearConsole](#clearConsole)                     | 编译是否清空控制台   |

#### `entry`

指定程序运行的入口，同 [`webpack.entry`](https://www.webpackjs.com/configuration/entry-context/#entry)

默认为: `<项目根路径>/index`。

#### `resolveExtraExtensions`

指定额外可省略的拓展名。

如：

```javascript
module.exports = {
  resolveExtraExtensions: [".json", ".png"],
};
```

默认预置了 `[".js", ".ts", ".jsx", ".tsx"]`，不必再次指定。

resolveExtraExtensions

#### `extraAlias`

指定额外的路径别名。

如：

```javascript
module.exports = {
  extraAlias: {
    "@component": "src/component",
    "@utils": "src/utils",
  },
};
```

默认预置了 `{ "@": "src" }`。

#### `outputPath`

指定打包输出文件的路径，同 [`webpack.output.path`](https://webpack.js.org/configuration/output/#outputpath)。

默认为： `<项目根路径>/dist` 。

#### `disableHash`

默认为打包后的文件开启 `hash`，如果需要禁用，设置该项为 `true`。

如：

```javascript
module.exports = {
  disableHash: true,
};
```

#### `publicPath`

打包后文件的公共资源路径，一般不需要设置，如果有特殊需求，可以指定。

如：

```js
module.exports = {
  publicPath: "/a",
};
```

默认为 `/` 。

#### `externals`

防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖。

同[`webpack.externals`](https://webpack.js.org/configuration/externals/#externals)。

#### `devtool`

设置 `sourceMap` 的风格，同[`webpack.devtool`](https://webpack.js.org/configuration/devtool/#devtool)。

默认为：`eval-source-map` 。

#### `html`

html

#### `clearConsole`

clearConsole

## TypeScript

我们提供默认的基本配置，您不必须提供其他配置：

```json
{
  "compilerOptions": {
    "module": "esnext",
    "target": "esnext",
    "lib": ["esnext", "dom"],
    "sourceMap": true,
    "jsx": "react",
    "allowSyntheticDefaultImports": true,
    "moduleResolution": "node",
    "allowJs": true,
    "skipLibCheck": true
  },
  "exclude": ["node_modules", "dist"]
}
```

如果需要自定义，请在根路径中编辑 'tsconfig.json' ，它将覆盖我们的默认配置。

查看更多配置项，点击[这里](https://www.tslang.cn/docs/handbook/compiler-options.html)

## 为什么叫 Alexios

Alexios, 育碧游戏公司作品《刺客信条：奥德赛》的主角。Αλέξιος，在古希腊语中意为 “防卫者”。

<img src="./logo-text.png" width="200px" />
