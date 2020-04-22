# Alexios

[查看中文版](./README_zh-cn.md)

## Why

Alexios is a cli that allows you to `quickly start` a React project with the minimum cost, almost `zero configuration`. Based on `Webpack 4` and `Babel 7`, it solves the problem that create-react-app cannot be customized.

## Docs

- [CHANGE_LOG](./CHANGELOG.md)

## Features

- 🌟 Out of the box, zero configuration to start.
- 🌟 Contained `dev`, `build` and `watch` commands, support babel, css-modules, mock, hmr, etc.
- 🌟 JSON mode configuration, keeps the API of webpack to the greatest extent, exposing that JS interface that can meet the additional expansion needs.
- 🌟 Friendly graphical console and error information.

## Getting started

```bash
## Intall locally (globally is not recommmended)
> npm install alexios --save-dev
```

```bash
## Install react and react-dom
> npm install react react-dom --save-dev
```

```javascript
// Echo in src/index.js
import ReactDOM from "react-dom";

const App = () => <>App</>;
ReactDOM.render(App, document.getElementById("root"));
```

```bash
## Start the development server
> alexios dev

## or

## Build your application
> alexios build
```

## Commands

#### `alexios dev`

Start the development server.

Optional params:

```bash
## custom port number（if the port is occupied, is will +1 util the port is free）
> alexios dev --port=9999

## open you browser automaticly
> alexios dev --open=true
```

#### `alexios build`

Build your application.

Optional params:

```bash
## analyze the package detail, based on BundleAnalyzerPlugin
> alexios build --analyze=true
```

#### `alexios watch`

Watch your file or folder changes, directly to you custom commands or restart the devServer.

```bash
## Watch single file and run custom command.
> alexios watch --file=['src/index.js, node a.js']

## Watch single file and run multiple custom command.
> alexios watch --file=['src/index.js, node a.js && node b.js']

## Watch multiple file.
> alexios watch --file=['src/index.js, node a.js', 'src/main.js, node a.js']

## Watch and restart devServer, use a special string '$RESTART$'.
> alexios watch --file=['src/index.js, $RESTART$']

## Watch folder.
> alexios watch --folder=['src/pages, node a.js']
```

## Configuration

If you need a custom configuration, ehco the `src/.alexiosrc.js`:

```javascript
module.exports = {
  // Optional
};
```

Optional:

| Name | Description |
| --- | --- |
| <a id="op-entry">entry</a> | Project entrance |
| <a id="op-resolveExtraExtensions">resolveExtraExtensions</a> | Extra support for omitted extensions |
| <a id="op-alias">alias</a> | Set path alias |
| <a id="op-outputPath">outputPath</a> | Packaging output path |
| <a id="op-disableHash">disableHash</a> | Disable packaged hash |
| <a id="op-publicPath">publicPath</a> | Public resource path |
| <a id="op-externals">externals</a> | Package exclusions |
| <a id="op-devtool">devtool</a> | Development tool mode |
| <a id="op-html">html</a> | Configuration of html file |
| <a id="op-clearConsole">clearConsole</a> | Compile clear console |

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

If you want to code in `.ts` or `.tsx`, you just need to configurate `tsconfig.json` in the root path. Here is a simple example :

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
