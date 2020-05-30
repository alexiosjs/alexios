# Alexios

![NPM_VERSION](https://img.shields.io/npm/v/alexios.svg?style=flat) ![LICENSE](https://img.shields.io/github/license/alexiosjs/alexios) ![Build Status](https://www.travis-ci.org/alexiosjs/alexios.svg?branch=master&style=flat-square)

A lightweight, powerful and zero-configuration `React` cli based on `Webpack` and `babel`.

<img src="./logo.png" width="150px" />

[查看中文版](./README_zh-cn.md)

## Why

Alexios is a cli that allows you to `quickly start` a React project with the minimum cost, almost `zero configuration`. Based on `Webpack 4` and `Babel 7`, provide a HAPPY development experience.

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

```jsx
// Echo in src/index.js
import Alexios from "alexios";

const App = () => <h1>Hello World</h1>;

const alexios = new Alexios({
  node: App,
});

alexios.launch();
```

```bash
## Start the development server
> alexios dev

## or

## Build your application
> alexios build
```

## Launcher

You can use Alexios's built-in launcher to quickly render your first React node, or you can replace it in any way you like. Alexios's launcher just provides you with a convenient way.

Using Alexios Launcher:

```jsx
// Import the Alexios launcher's constructor
import Alexios from "alexios";

// Your first React Component
const App = () => <h1>Hellow World</h1>;

// Create launcher instance
const alexios = new Alexios({
  node: App,
});

// Launcher
alexios.launch();
```

Launcher instantiation parameters:

| name      | description                     | required |
| --------- | ------------------------------- | -------- |
| elementId | root element id, default `root` | no       |
| node      | root React Component            | yes      |

Instance methods:

| name   | description    |
| ------ | -------------- |
| launch | launch the app |

If you don't want to use the Alexios launcher, you can do this:

```jsx
import React from "react";
import ReactDOM from "react-dom";

const App = () => <h1>Hello World</h1>;

// Confirm that the id does exist in HTML
ReactDOM.render(<App />, document.getElementById("root"));
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
| [entry](#entry) | Project entrance |
| [resolveExtraExtensions](#resolveExtraExtensions) | Extra support for omitted extensions |
| [extraAlias](#extraAlias) | Set extra path alias |
| [outputPath](#outputPath) | Packaging output path |
| [disableHash](#disableHash) | Disable packaged hash |
| [publicPath](#publicPath) | Public resource path |
| [externals](#externals) | Package exclusions |
| [devtool](#devtool) | Development tool mode |
| [html](#html) | Configuration of html file |
| [clearConsole](#clearConsole) | Compile clear console |

#### `entry`

Specify the entry of the program, same as [`webpack.entry`](https://www.webpackjs.com/configuration/entry-context/#entry)

Default as: `<projectPath>/index` .

#### `resolveExtraExtensions`

Specifies additional extensions that can be omitted.

For example:

```javascript
module.exports = {
  resolveExtraExtensions: [".json", ".png"],
};
```

By default, `[".js", ".ts", ".jsx", ".tsx"]` is preset, and it is unnecessary to specify it again.

#### `extraAlias`

Specify additional path aliases.

For example:

```javascript
module.exports = {
  extraAlias: {
    "@component": "src/component",
    "@utils": "src/utils",
  },
};
```

`{ "@": "src" }` is preset by default.

#### `outputPath`

Specifies the path to package the output file, same as [`webpack.output.path`](https://webpack.js.org/configuration/output/#outputpath).

Default as: `<projectPath>/dist` .

#### `disableHash`

By default, `hash` is enabled for packed files. If you need to disable it, set this to `true`.

For example:

```javascript
module.exports = {
  disableHash: true,
};
```

#### `publicPath`

The path of the public resource of the packed file generally does not need to be set. If there are special requirements, you can specify it.

For example:

```js
module.exports = {
  publicPath: "/a",
};
```

Default as `/` .

#### `externals`

Prevent bundling of certain imported packages and instead retrieve these external dependencies at runtime.

Same as [`webpack.externals`](https://webpack.js.org/configuration/externals/#externals).

#### `devtool`

Choose a style of `sourceMap`, same as [`webpack.devtool`](https://webpack.js.org/configuration/devtool/#devtool).

Default as: `eval-source-map` .

#### `html`

html

#### `clearConsole`

clearConsole

## TypeScript

We provide the default basic configuration, you don't have to provide additional configuration:

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

If you need to customize, echo `tsconfig.json` in the root path, It will override our default configuration.

For more detail, click [here](https://www.tslang.cn/docs/handbook/compiler-options.html)

## Why called Alexios

Alexios, protagonist of "Assassin's Creed: Odyssey" by Ubisoft. Αλέξιος, in ancient Greek it means "defender".

<img src="./logo-text.png" width="200px" />
