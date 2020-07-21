## 1.0.7 (2020-07-21)

### Bug Fixes

- 修复 bin 文件 CRLF 的问题 ([fe668a4](https://github.com/alexiosjs/alexios/commit/fe668a443232047ed32edf881d72a9b1de442b8a))

### Features

- 添加配置 scripts ([0502904](https://github.com/alexiosjs/alexios/commit/05029042306a3978fdd375e9fd60d5efe7ac841d))
- 添加配置 extraWebpackPlugins ([b55c836](https://github.com/alexiosjs/alexios/commit/b55c8360e11fb4e230902501440d1cf5efbd9993))
- 支持多入口模式 ([6389f81](https://github.com/alexiosjs/alexios/commit/6389f818dd622a4c8353cf8f2160be31bebbe2de))
- 支持局域网访问 ([b0c2ba8](https://github.com/alexiosjs/alexios/commit/b0c2ba882e23e67561608b52c86157e91bc9a1c5))

## 1.0.6 (2020-06-24)

### Bug Fixes

- 修复监听配置文件变动自动重启后命令行参数失效的问题 ([320fa8a](https://github.com/alexiosjs/alexios/commit/320fa8a6851376cedc315cf26cb8f1620711ac62))
- 使用 node-sass 代替 dart-sass，防止 mac 的兼容性问题 ([3d3e20f](https://github.com/alexiosjs/alexios/commit/3d3e20fe15a2da08ced54b3140badddba1faca44))

## 1.0.5 (2020-06-22)

### Bug Fixes

- 修复 alexiosrc 配置不生效的问题 ([f741d7b](https://github.com/alexiosjs/alexios/commit/f741d7b2fb1fa3a1bb2ec659f8b95a0a31ce7521))

### Features

- 配置文件修改和 public 文件夹首次新建时自动重启 app ([df7a62d](https://github.com/alexiosjs/alexios/commit/df7a62d70b9ec1cebdcf2e5f563a3994d055fe28))
- dev 环境 className 可读 ([32d978d](https://github.com/alexiosjs/alexios/commit/32d978d95faa317e5ff32f622f6aac2820bfd1dd))

## 1.0.4 (2020-06-11)

### Bug Fixes

- 修复启动时强制读取 public 路径和 favicon 的问题 ([f028e5d](https://github.com/alexiosjs/alexios/commit/f028e5d7fba5712ebd3aa9c29aa4323d8a4831aa))
- 修复一个依赖丢失的问题 && node-sass 切换为 dart-sass ([8cb23d8](https://github.com/alexiosjs/alexios/commit/8cb23d88039b6ba6f286f6bc90f264e718b705f6))
