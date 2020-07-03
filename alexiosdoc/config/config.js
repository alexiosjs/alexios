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
  menus: {
    "/quick-start": [
      {
        title: "Introduction",
        children: [
          "quick-start/introduction.en-US.md",
          "quick-start/start.en-US.md",
          "quick-start/chunk.en-US.md",
        ],
      },
      {
        title: "Basic Usage",
        children: [
          "quick-start/cli-params.en-US.md",
          "quick-start/css-modules.en-US.md",
          "quick-start/public.en-US.md",
          "quick-start/typescript.en-US.md",
          "quick-start/mock.en-US.md",
        ],
      },
    ],
    "/zh-CN/quick-start": [
      {
        title: "介绍",
        children: [
          "quick-start/introduction.zh-CN.md",
          "quick-start/start.zh-CN.md",
          "quick-start/chunk.zh-CN.md",
        ],
      },
      {
        title: "基本用法",
        children: [
          "quick-start/cli-params.zh-CN.md",
          "quick-start/css-modules.zh-CN.md",
          "quick-start/public.zh-CN.md",
          "quick-start/typescript.zh-CN.md",
          "quick-start/mock.zh-CN.md",
        ],
      },
    ],
  },
  base: "/alexios/",
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
