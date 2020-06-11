---
group:
  title: Introduction
# translateHelp: true
---

# <strong>Start</strong>

## <strong>Launch Your First App</strong>

Install dev dependencies:

```bash
> npm install alexios react react-dom -D
```

Write the entry file, read <b>src/index</b> by default, the extension can be one of <b>js、jsx、tsx</b>:

```js
import React from "react";
import ReactDOM from "react-dom";

const App = () => <h1>Hello Alexios</h1>;
ReactDOM.render(<App />, document.getElementById("root")); // There is a node with id root by default in html
```

launch command line:

```bash
> npx alexios dev
```

Accomplish, visit <b>localhost://3000</b>.

## <strong>Package Your App</strong>

Build command line:

```bash
> npx alexios build
```

Accomplish, default in directory <b>/dist</b>.

## <strong>Local Verification</strong>

If you want to package the project, verify it locally before publishing it online. The usual practice in the past was to configure an nginx service locally and other means。Now you only need to use the `serve` command to quickly start a static server. The proxy used by the interface is exactly the same as the development environment:

```bash
> npx run serve
```

The browser will open automatically.
