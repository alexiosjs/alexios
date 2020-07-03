---
order: 1
---

# CSS-Modules

支持 `css`，`less`，`scss` 三种格式，不需要手动设置，会自动识别引入的方式来自动开启。

## 常规方式

```js
import "./index.less";
```

## CSS-Modules 方式

```js
import styles from "./index.less";
```

开启 CSS-Modules 后的样式文件，如果需要设置全局样式，可以通过 `:global` 选择器：

```less
:global {
  .red: {
    color: red;
  }
}
```

## 注意

开启 CSS-Modules 之后的 className 在开发环境下是可读的，但在生产环境下会强制转换为 hash64。
