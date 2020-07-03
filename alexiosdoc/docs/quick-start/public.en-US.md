# Public Assets

## Agreed Path

We agree to store all public resources under the `/public` path. When used as static resources, they will not be parsed, and will be copied to the output root directory during construction.

## Use As Static Resources

Assuming there is a `public/example.jpg` picture, it should be used in the project like this:

```html
<img src="/example.jpg" alt="example" />
```

Assuming that there is a `public/img/example.jpg` picture, it should be used in the project like this:

```html
<img src="/img/example.jpg" alt="example" />
```
