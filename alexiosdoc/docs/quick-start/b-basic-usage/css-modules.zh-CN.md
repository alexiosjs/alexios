---
group:
  title: 基本用法
order: 1
# translateHelp: true
---

# <strong>CSS-Modules</strong>

支持 <strong>css</strong>， <strong>less</strong>， <strong>scss</strong> 三种格式，不需要手动设置，会自动识别引入的方式来自动开启。

## <strong>常规方式</strong>

```js
import "./index.less";
```

## <strong>CSS-Modules 方式</strong>

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

## <strong>注意</strong>

开启 CSS-Modules 之后的 className 在开发环境下是可读的，但在生产环境下会强制转换为 hash64。
