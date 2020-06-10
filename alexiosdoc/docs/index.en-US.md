---
title: AlexiosJS - Lightweight, zero configuration, out of the box, enterprise-level React launcher
hero:
  title: AlexiosJS
  desc: 🐦 Lightweight, zero configuration, out of the box, enterprise-level React launcher <br/><br/> ![NPM_VERSION](https://img.shields.io/npm/v/alexios.svg?style=flat) ![LICENSE](https://img.shields.io/github/license/alexiosjs/alexios) ![Build Status](https://www.travis-ci.org/alexiosjs/alexios.svg?branch=master&style=flat-square)
  actions:
    - text: Quick Start
      link: /quick-start
features:
  - icon: https://alexiosjs.github.io/alexios/outofbox.png
    title: Out Of The Box
    desc: Started with zero or very few configurations, meeting more than 80% of enterprise-level development needs. Automatic first, reduce costs and stay focused.
  - icon: https://alexiosjs.github.io/alexios/speed.png
    title: Quick Compilation
    desc: Multi-core compilation, shorten compilation time by more than 50%, give development and production the same experience, and make development more efficient.
  - icon: https://alexiosjs.github.io/alexios/intelli.png
    title: Smart Packaging
    desc: Automatic packaging strategy, js lazy loading, reuse of resources, compatible with privatized deployment, and maximum use of cache.
  - icon: https://alexiosjs.github.io/alexios/mock.png
    title: Mocking
    desc: The JSON-like mock data structure supports custom mock logic, hot swapping intercepts interface requests.
  - icon: https://alexiosjs.github.io/alexios/css.png
    title: CSS Modules
    desc: CSS Modules that support css, less, sass, scss, and stylus are automatically enabled according to the import method without configuration.
  - icon: https://alexiosjs.github.io/alexios/poly.png
    title: Onet-Step Polyfill
    desc: Based on react-app-polyfill, only one configuration is required, and it can be quickly compatible with IE9, and quickly opened with the command line.
footer: MIT Licensed | Copyright © 2020 - present <br />Powered by [dumi](https://d.umijs.org/).
---

## Get Started

Local installation dependencies

```bash
> npm install alexios react react-dom -D
```

echo src/index.js `both jsx and tsx`

```js
import React from "react";
import ReactDOM from "react-dom";

const App = () => <h1>Hello World !</h1>;
ReactDOM.render(<App />, document.getElementById("root"));
```

launch

```bash
> npx alexios dev
```

<div style="text-align: center;"><img style="width: 220px;" src="https://alexiosjs.github.io/alexios/logo-text.png" /></div>
