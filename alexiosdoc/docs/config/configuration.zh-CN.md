---
toc: menu
---

# 选项

在项目根路径下新建 `.alexiosrc.js`，选择性地进行配置，以下配置项按首字母排列。

## define

- 类型： `{ [key: string]: any }`
- 默认值：`{}`

自定义全局变量，所有的变量都会经过 `stringify`。

```js
module.exports = {
  define: {
    myname: "alexios",
  },
};

console.log(myname); // alexios
```

## devtool

- 类型： `string`
- 默认值：`eval-source-map`

控制 source-map 的生成方式，一般不需要进行调整。

```js
module.exports = {
  devtool: "cheap-eval-source-map",
};
```

## disableCssExtract

- 类型： `boolean`
- 默认值：开发环境永远为 `true`，生产环境默认 `false`

是否禁用提取单独的 css 文件。

```js
module.exports = {
  disableCssExtract: true, // 开发环境无效，生产环境css会打包进js中
};
```

## disableHash

- 类型： `boolean`
- 默认值：`false`

是否取消构建产物的 hash。

```js
module.exports = {
  disableHash: true,
};
```

## entry

- 类型： `string | { [key: string]: string }`
- 默认值：`<根路径>/src/index`

项目入口设置，支持单入口和多入口。

单入口:

```js
var path = require("path");

module.exports = {
  entry: path.resolve("src/main.js"),
};
```

多入口：

- 多入口打包后会自动生成多个 html 文件，文件名为配置中的 `key`。
- 分别定义模板，见 [htmlTemplate](/zh-CN/config/configuration#htmltemplate)
- 分别定义 title，见 [title](/zh-CN/config/configuration#title)
- 分别定义 favicon，见 [favicon](/zh-CN/config/configuration#favicon)

```js
var path = require("path");

module.exports = {
  entry: {
    index: path.resolve("src/index"), // 使用 <host>/index.html访问
    login: path.resolve("src/login"), // 使用 <host>/login.html访问
  },
};
```

## externals

- 类型： `{ [key: string]: string }`
- 默认值：`{}`

设置打包时忽略的模块，需要配合 [scripts](/zh-CN/config/configuration#scripts)，或使用自定义 html 模板。

```js
module.exports = {
  externals: {
    jquery: "jQuery",
  },
};

import $ from "jquery";
```

## extraAlias

- 类型： `{ [key: string]: string }`
- 默认值：`{}`

设置额外的路径别名，默认支持 `@: <根路径>/src`。

```js
var path = require("path");

module.exports = {
  extraAlias: {
    "@components": path.resolve("src/components"),
  },
};
```

## extraBabelIncludes

- 类型： `string[]`
- 默认值：`[]`

设置额外需要编译的路径，一般不需要设置，出现以下情况的，可以手动进行设置：

- 自动编译第三方目录时有被遗漏的。
- 有需要编译的文件放在 src 路径之外的。

```js
var path = require("path");

module.exports = {
  extraBabelIncludes: [path.resolve("/a.js")],
};
```

## extraBabelPlugins

- 类型： `any[]`
- 默认值：`[]`

设置额外的 babel 插件，如设置 自定义 babel 插件和 antd 的按需加载插件：

```js
module.exports = {
  extraBabelPlugins: [
    "bable-plugin-custom",
    ["import", { libraryName: "antd", style: true }],
  ],
};
```

## extraBabelPresets

- 类型： `any[]`
- 默认值：`[]`

设置额外的 bable 预设。

```js
module.exports = {
  extraBabelPresets: ["bable-preset-custom"],
};
```

## extraCompileRules

- 类型： `any[]`
- 默认值：`[]`

设置额外的解析规则，如需要用自定义 loader 解析特定文件。

```js
var path = require("path");

module.exports = {
  extraCompileRules: [
    {
      test: /my-custom-file.js$/,
      loader: path.resolve("my-custom-loader"),
    },
  ],
};
```

## extraOmittedExtensions

- 类型： `string[]`
- 默认值：`[]`

设置额外可忽略的拓展名，默认支持 `.js、.ts、.jsx、.tsx`。

```js
module.exports = {
  extraOmittedExtensions: [".json"],
};
```

## extraStaticFileExtensions

- 类型： `string[]`
- 默认值：`[]`

设置额外把哪些文件当作静态文件处理，默认支持 `.webp、.bmp、.jpg、.jpeg、.gif、.svg、.png、.ico、.ttf、.woff`。

```js
module.exports = {
  extraStaticFileExtensions: [".json"],
};
```

## favicon

- 类型： `string | { [key: string]: string }`

设置网站图表，支持单页和多页，默认使用 `<根路径>/public/favicon.ico`。

- 设置成字符串模式，开启多入口时，所有的入口都会使用该图标。
- 设置成对象模式，开启多入口时，未设置的入口会使用默认路径。

```js
var path = require("path");

module.exports = {
  favicon: path.resolve("favicon.ico"),
};
```

```js
var path = require("path");

module.exports = {
  favicon: {
    index: path.resolve("index.ico"),
    login: path.resolve("login.ico"),
  },
};
```

## hashLength

- 类型： `number`
- 默认值：`8`

设置打包产物的 hash 长度，默认 `8`。

## htmlTemplate

- 类型： `string | { [key: string]: string }`

设置网站 html 模板，支持单页和多页，默认使用 alexios 的模板。

- 设置成字符串模式，开启多入口时，所有的入口都会使用该模板。
- 设置成对象模式，开启多入口时，未设置的入口会使用默认模板。

```js
var path = require("path");

module.exports = {
  htmlTemplate: path.resolve("index.html"),
};
```

```js
var path = require("path");

module.exports = {
  favicon: {
    index: path.resolve("index.html"),
    login: path.resolve("login.html"),
  },
};
```

## ie

- 类型： `9 | 11`

设置最低兼容的 ie 版本，自动在所有入口处引入所需的 polyfill，也可以使用命令行参数 `--ie` 来设置，命令行参数优先级高于 config 参数。

```js
module.exports = {
  ie: 9,
};
```

## ignoreMomentLocale

- 类型： `boolean`
- 默认： `true`

忽略 `momentjs` 的多语言文件，默认开启。

## lessVars

- 类型： `{ [key: string]: string }`
- 默认： `{}`

设置全局的 less 变量， 变量名前不需要加 `@`。

```js
module.exports = {
  lessVars: {
    bgColor: "red",
  },
};
```

## outputPath

- 类型： `string`
- 默认： `<根路径>/dist`

设置打包产物的生成文件夹，默认在 dist 目录下。

```js
var path = require("path");

module.exports = {
  outputPath: path.resolve("lib"),
};
```

## proxy

- 类型： `any[]`
- 默认： `{}`

设置开发环境的代理，同 [webpack.devServer.proxy](https://webpack.js.org/configuration/dev-server/#devserverproxy)。

## publicPath

- 类型： `string`
- 默认： `/`

设置 webpack 的 publicPath，一般不需要主动设置，在使用 CDN 的时候可以设置成 CDN 地址。

## sassVars

- 类型： `{ [key: string]: string }`
- 默认： `{}`

设置全局的 sass 变量， 变量名前不需要加 `$`。

```js
module.exports = {
  sassVars: {
    bgColor: "red",
  },
};
```

## scripts

- 类型： `string[] | { [key: params]: string[] }`
- 默认： `[]`

给 html 文件注入额外的脚本，会自动插入到所有打包产物的 script 之前，在设置了 `externals` 或有自定义静态脚本时可以使用。

注意：这样引入的脚本即使处于开发路径中，也不会经过编译，如果有自定义的静态脚本，建议放在 `public` 路径下。

- 配置成数组形式时并开启多入口时，所有的 html 都会插入数组中的脚本。
- 配置成对象形式时，`key` 值为 `入口名称`，可以对不同入口分别配置。

```js
var path = require("path");

module.exports = {
  scripts: ["https://a.com/a.js", path.resolve("public/b.js")],
};
```

```js
var path = require("path");

module.exports = {
  scripts: {
    index: ["https://a.com/a.js"],
    login: [path.resolve("public/b.js")],
  },
};
```

## staticFileHash

- 类型： `boolean`
- 默认： `false`

是否开启静态文件打包后的 hash 值，默认不开启。

## title

- 类型： `string | { [key: string]: string }`

设置网站标题，支持单页和多页。

- 设置成字符串模式，开启多入口时，所有的入口都会使用该标题。
- 设置成对象模式，开启多入口时，未设置的入口会使用模板标题。

```js
var path = require("path");

module.exports = {
  title: "A",
};
```

```js
var path = require("path");

module.exports = {
  title: {
    index: "Index",
    login: "Login",
  },
};
```
