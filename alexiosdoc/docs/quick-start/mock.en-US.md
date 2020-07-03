# Mock

JSON-like data structure, pluggable mock tool, support `GET`, `POST`, `PUT`, `PATCH`, `DELETE`.

## File Rules

We agreed that all `.js` files in the `/mock` folder will be automatically imported as data sources, without manual import, and will be effective immediately after modification.

## The First Mock File

Create a new `/mock/user.js` file with the following content:

```js
module.exports = {
  "POST /api/getUserInfo": {
    username: "alexios",
    userid: 12345,
  },
};
```

Use `POST` to call the `/api/getUserInfo` interface to get the defined data.

## Functional Mock

If you want to include logic code in the mock configuration, you can define it like this:

```js
module.exports = {
  "POST /api/getUserInfo": function (request, response) {
    /**
     * request contains the request body, which can be used to make logical judgments
     * API for request and response, refer to express
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
