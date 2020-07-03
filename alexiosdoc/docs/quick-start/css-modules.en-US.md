---
order: 1
---

# CSS-Modules

Support `css`, `less`, `scss`, do not need to set manually, will automatically identify the import method to automatically open.

## Conventional

```js
import "./index.less";
```

## Use CSS-Modules

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

## Attention

The className after opening CSS-Modules is readable in the development environment, but will be forced to be hash64 in the production environment.
