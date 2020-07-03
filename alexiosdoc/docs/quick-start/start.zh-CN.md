# 开始

## 启动第一个项目

安装必须的依赖:

```bash
> npm install alexios react react-dom -D
```

编写入口文件，入口文件默认读取 `src/index` ，拓展名为 `js、jsx、tsx` 三者之一：

```js
import React from "react";
import ReactDOM from "react-dom";

const App = () => <h1>Hello Alexios</h1>;
ReactDOM.render(<App />, document.getElementById("root")); // html中默认存在id为root的节点
```

执行启动命令:

```bash
> npx alexios dev
```

启动完成，访问 `localhost://3000` 可看到页面。

## 打包你的项目

执行打包命令：

```bash
> npx alexios build
```

打包完成，生成的文件默认在 `/dist` 目录下。

## 本地验证

如果你想在项目打包，发布到线上之前在本地先验证一下，以前通常的做法是本地配置一个 nginx 服务等手段。现在你只需要使用 `serve` 指令，即可快速启动一个静态服务器，接口使用的代理和开发环境完全一致：

```bash
> npx run serve
```

浏览器会自动打开。
