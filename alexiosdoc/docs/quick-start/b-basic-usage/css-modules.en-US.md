---
group:
  title: Basic Usage
order: 1
# translateHelp: true
---

# <strong>CSS-Modules</strong>

Support <strong>css</strong>, <strong>less</strong>, <strong>scss</strong>, do not need to set manually, will automatically identify the import method to automatically open.

## <strong>Conventional</strong>

```js
import "./index.less";
```

## <strong>Use CSS-Modules</strong>

```js
import styles from "./index.less";
```

After opening the CSS-Modules, if you need to set the global style, you can use the `:global` selector:

```less
:global {
  .red: {
    color: red;
  }
}
```

## <strong>Attention</strong>

The className after opening CSS-Modules is readable in the development environment, but will be forced to be hash64 in the production environment.
