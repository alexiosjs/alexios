# Mock

类 JSON 的数据结构，可插拔的 mock 工具，支持 `GET`、 `POST`、 `PUT`、 `PATCH`、 `DELETE`。

## 文件规则

我们约定，`/mock` 文件夹下的所有 `.js` 文件都会被自动引入作为数据源，无需手动引入，修改后即时生效。

## 编译第一个 Mock 文件

新建 `/mock/user.js` 文件，内容如下：

```js
module.exports = {
  "POST /api/getUserInfo": {
    username: "alexios",
    userid: 12345,
  },
};
```

使用 `POST` 方式调用 `/api/getUserInfo` 接口，即可得到定义的数据。

## 函数式配置

如果希望在 mock 配置中包含逻辑代码，可以这样定义：

```js
module.exports = {
  "POST /api/getUserInfo": function (request, response) {
    /**
     * request 中包含请求体，可以用来做逻辑判断
     * requset、response的api，参考express
     */
    response.send(
      JSON.stringify({
        username: "alexios",
        userid: 12345,
      })
    );
  },
};
```
