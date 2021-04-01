## 1.0.8 (2021-04-01)

### Bug Fixes

- Fix the problem of abnormal packaging when there are static resources with the same file name in different folders ([4a8e39b](https://github.com/alexiosjs/alexios/commit/4a8e39b253ef7c96b1847106f553b971f80960b9))

### Features

- Support to set define parameter in the command line ([3c679df](https://github.com/alexiosjs/alexios/commit/3c679df78f8e608183b6c895f772a89809840ec9))
- rc and config files support custom file names ([3c679df](https://github.com/alexiosjs/alexios/commit/3c679df78f8e608183b6c895f772a89809840ec9))
- After opening cssModule, the class name is readable in the develop environment ([3c679df](https://github.com/alexiosjs/alexios/commit/3c679df78f8e608183b6c895f772a89809840ec9))
- After packaging, automatically clean up debugger and console ([3c679df](https://github.com/alexiosjs/alexios/commit/3c679df78f8e608183b6c895f772a89809840ec9))
- Add object configuration mode to scripts attribute, support defer, async and other parameters ([bb4ca0b](https://github.com/alexiosjs/alexios/commit/bb4ca0b33131bb3e050adc8a49ca2884dac0181c))

## 1.0.7 (2020-07-21)

### Bug Fixes

- Fix the CRLF bug in bin file ([fe668a4](https://github.com/alexiosjs/alexios/commit/fe668a443232047ed32edf881d72a9b1de442b8a))

### Features

- Add config.scripts ([0502904](https://github.com/alexiosjs/alexios/commit/05029042306a3978fdd375e9fd60d5efe7ac841d))
- Support extraWebpackPlugins ([b55c836](https://github.com/alexiosjs/alexios/commit/b55c8360e11fb4e230902501440d1cf5efbd9993))
- Support multiple entry ([6389f81](https://github.com/alexiosjs/alexios/commit/6389f818dd622a4c8353cf8f2160be31bebbe2de))
- Support visit in network ([b0c2ba8](https://github.com/alexiosjs/alexios/commit/b0c2ba882e23e67561608b52c86157e91bc9a1c5))

## 1.0.6 (2020-06-24)

### Bug Fixes

- Fix the problem of invalid command line parameters after automatic restart of listening profile changes ([320fa8a](https://github.com/alexiosjs/alexios/commit/320fa8a6851376cedc315cf26cb8f1620711ac62))
- Use node-sass instead of dart-sass, prevent MAC compatibility problems ([3d3e20f](https://github.com/alexiosjs/alexios/commit/3d3e20fe15a2da08ced54b3140badddba1faca44))

## 1.0.5 (2020-06-22)

### Bug Fixes

- Fix the problem that the alexiosrc not working ([f741d7b](https://github.com/alexiosjs/alexios/commit/f741d7b2fb1fa3a1bb2ec659f8b95a0a31ce7521))

### Features

- Auto reload when config files and public path changed ([df7a62d](https://github.com/alexiosjs/alexios/commit/df7a62d70b9ec1cebdcf2e5f563a3994d055fe28))
- Make className of CSS-Modules readable in dev mode ([32d978d](https://github.com/alexiosjs/alexios/commit/32d978d95faa317e5ff32f622f6aac2820bfd1dd))

## 1.0.4 (2020-06-11)

### Bug Fixes

- Fix the problem of forcibly reading the public path and favicon at startup ([f028e5d](https://github.com/alexiosjs/alexios/commit/f028e5d7fba5712ebd3aa9c29aa4323d8a4831aa))
- Fix a problem of missing dependencies && Switch node-sass to dart-sass ([8cb23d8](https://github.com/alexiosjs/alexios/commit/8cb23d88039b6ba6f286f6bc90f264e718b705f6))
