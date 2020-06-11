const config = {
  mode: "site",
  title: "AlexiosJS",
  logo: "https://alexiosjs.github.io/alexios/logo.png",
  navs: {
    "en-US": [
      {
        title: "Quick Start",
        path: "/quick-start",
      },
      {
        title: "Config",
        path: "/config",
      },
      { title: "GitHub", path: "https://github.com/alexiosjs/alexios" },
      {
        title: "Change Log",
        path: "https://github.com/alexiosjs/alexios/releases",
      },
    ],
    "zh-CN": [
      {
        title: "快速开始",
        path: "/zh-CN/quick-start",
      },
      {
        title: "配置项",
        path: "/zh-CN/config",
      },
      { title: "GitHub", path: "https://github.com/alexiosjs/alexios" },
      {
        title: "更新日志",
        path: "https://github.com/alexiosjs/alexios/releases",
      },
    ],
  },
  // base: "/alexios/",
  publicPath: "/alexios/",
  exportStatic: {},
  theme: {
    "@c-primary": "#ff7276",
  },
};

if (process.env.NODE_ENV === "production") {
  config.dynamicImport = {};
}

export default config;
