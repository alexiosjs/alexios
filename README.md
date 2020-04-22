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

Start the development server

Optional params:

```bash
## custom port number（if the port is occupied, is will +1 util the port is free）
> alexios dev --port=9999

## open you browser automaticly
> alexios dev --open=true
```

#### `alexios build`

Build your application

Optional params:

```bash
## analyze the package detail, based on BundleAnalyzerPlugin
> alexios build --analyze=true
```

#### `alexios watch`
