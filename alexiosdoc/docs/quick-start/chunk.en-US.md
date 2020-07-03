---
order: 2
---

# Packaging Strategy

By default, it is based on `resource lazy loading` and `resource reuse`.

## Lazy Load

Resources imported via `() => import` or `require.ensure` will be automatically packaged separately, `load on demand`. This kind of packet is generally in the form of `use routing as the granularity`. In the extraction process, if two or more files use the same resource, and the size of the resource after packaging is less than 30K, it will enter the next step.

If you need to make the packaged asynchronous resource name readable, you can do this:

```js
() => import(/* webpackChunkName: "My_Page" */ "./pages/MyPage");
```

## Common Packaging

If two or more files use the same resource, and the size of the resource after packaging is greater than 30K, the resource will be packaged separately. In order to have the loading sequence problem caused by the non-asynchronous resource common code, the `Non-asynchronous packaging`, it will be loaded initially.

## Third-party Dependents

Similar to the previous step, the third-party dependency will appear as a non-asynchronous vendor package. If there are resources that have been packaged in the previous step, they will be skipped to achieve maximum resource reuse.
