---
title: AlexiosJS - 轻量化、零配置、开箱即用的企业级 React 脚手架
hero:
  title: AlexiosJS
  desc: 🐦 轻量化、零配置、开箱即用的企业级 React 脚手架 <br/><br/> ![NPM_VERSION](https://img.shields.io/npm/v/alexios.svg?style=flat) ![LICENSE](https://img.shields.io/github/license/alexiosjs/alexios) ![Build Status](https://www.travis-ci.org/alexiosjs/alexios.svg?branch=master&style=flat-square)
  actions:
    - text: 快速开始
      link: /zh-CN/quick-start/
features:
  - icon: https://alexiosjs.github.io/alexios/outofbox.png
    title: 开箱即用
    desc: 零配置或极少的配置即可开始项目，满足 80% 以上的企业级开发需求。自动至上，减少成本，保持专注。
  - icon: https://alexiosjs.github.io/alexios/speed.png
    title: 快速编译
    desc: 多核编译，缩短编译时间 50% 以上，减少不必要的等待时间，给开发和生产相同的体验，让开发更有效率。
  - icon: https://alexiosjs.github.io/alexios/intelli.png
    title: 智能分包
    desc: 自动的分包策略，js 懒加载，尽可能复用资源，兼容私有化部署，最大限度利用缓存，减少不必要的流量消耗。
  - icon: https://alexiosjs.github.io/alexios/mock.png
    title: 接口 mock
    desc: 类 JSON 的 mock 数据结构，支持自定义 mock 逻辑，热插拔拦截接口请求，开发不再受接口限制。
  - icon: https://alexiosjs.github.io/alexios/css.png
    title: CSS Modules
    desc: 支持 css、less、sass、scss、stylus 的 CSS Modules，根据引入方式自动启用，无需配置。
  - icon: https://alexiosjs.github.io/alexios/poly.png
    title: 一键 Polyfill
    desc: 基于 react-app-polyfill，只需一个配置，即可快速兼容到 IE9，配合命令行快速开启。
footer: MIT Licensed | Copyright © 2020 - present <br />Powered by [dumi](https://d.umijs.org/).
---

## 一分钟上手

本地安装依赖

```bash
> npm install alexios react react-dom -D
```

写入文件 src/index.js `jsx、tsx 均可`

```js
import React from "react";
import ReactDOM from "react-dom";

const App = () => <h1>Hello World !</h1>;
ReactDOM.render(<App />, document.getElementById("root"));
```

启动

```bash
> npx alexios dev
```

<div style="text-align: center;"><img style="width: 220px;" src="https://alexiosjs.github.io/alexios/logo-text.png" /></div>
