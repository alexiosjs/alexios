# 公共资源路径

## 约定路径

我们约定 `/public` 路径下存放所有的公共资源，当作静态资源使用时，不会经过解析，在构建时会全部被复制到输出根目录下。

## 当作静态资源使用

假设存在 `public/example.jpg` 图片，在项目中应这样使用：

```html
<img src="/example.jpg" alt="example" />
```

假设存在 `public/img/example.jpg` 图片，在项目中应这样使用：

```html
<img src="/img/example.jpg" alt="example" />
```
