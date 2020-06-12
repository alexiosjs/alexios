---
group:
  title: 基本用法
order: 2
# translateHelp: true
---

# <strong>分包策略</strong>

默认采用基于<strong>资源懒加载</strong>和<strong>资源复用</strong>的方式进行分包。

## <strong>资源懒加载</strong>

通过 `() => import` 或 `require.ensure` 的方式导入的资源，会自动单独打包，<strong>按需加载</strong>。这种包一般常见为形式是<strong>以路由为粒度</strong>。在抽取的过程中，如果两个或两个以上的文件用到了相同的资源，且该资源打包后大小小于 30K，则会进入下一步。

如果需要打包后的异步资源名称可读，可以这样做：

```js
() => import(/* webpackChunkName: "My_Page" */ "./pages/MyPage");
```

## <strong>公共代码打包</strong>

如果两个或两个以上的文件用到了相同的资源，且该资源打包后大小大于 30K，则会将该资源单独进行打包，为了有非异步资源公用代码引起的加载顺序问题，将会采用<strong>非异步打包</strong>的形式，初始就会进行加载。

## <strong>第三方依赖打包</strong>

和上一步道理相同，第三方依赖会作为非异步的 vendor 包出现，如果有已经在上一步被打包的资源，则会跳过，做到最大程度的资源复用。
