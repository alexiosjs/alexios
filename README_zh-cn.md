# Alexios

[English](./README.md)

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

| 名称 | 描述 |
| --- | --- |
| <a id="op-entry">entry</a> | 项目入口 |
| <a id="op-resolveExtraExtensions">resolveExtraExtensions</a> | 额外支持省略的拓展名 |
| <a id="op-alias">alias</a> | 设置路径别名 |
| <a id="op-outputPath">outputPath</a> | 打包输出路径 |
| <a id="op-disableHash">disableHash</a> | 禁用打包的 Hash |
| <a id="op-publicPath">publicPath</a> | 公共资源路径 |
| <a id="op-externals">externals</a> | 打包排除项 |
| <a id="op-devtool">devtool</a> | 开发工具模式 |
| <a id="op-html">html</a> | html 模板文件的配置 |
| <a id="op-clearConsole">clearConsole</a> | 编译是否清空控制台 |

#### `entry` [](#op-entry)

entry

#### `resolveExtraExtensions` [](#op-resolveExtraExtensions)

resolveExtraExtensions

#### `alias` [](#op-alias)

alias

#### `outputPath` [](#op-outputPath)

outputPath

#### `disableHash` [](#op-disableHash)

disableHash

#### `publicPath` [](#op-publicPath)

publicPath

#### `externals` [](#op-externals)

externals

#### `devtool` [](#op-devtool)

devtool

#### `html` [](#op-html)

html

#### `clearConsole` [](#op-clearConsole)

clearConsole

## TypeScript

如果需要编写 `.ts` 或 `.tsx` 文件，只需在根目录下配置 `tsconfig.json` 即可， 这里是一个最简单的示例：

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
