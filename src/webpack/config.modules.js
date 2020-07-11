import path from "path";
// import os from "os";
import fs from "fs-extra";
import HappyPack from "happypack";
import webpack from "webpack";
import chalk from "chalk";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlPlugin from "html-webpack-plugin";
import ProgressBar from "webpack-progress-bar";
import getRcConfig from "../utils/get-rc-config";
import projectPath from "../utils/project-path";
import babelConfig from "../babel/config";
import getNetworkIp from "../utils/get-network-ip";
import entryVerify from "../utils/entry-verify";

// @ts-ignore
// const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

export const entry = ({ ie }) => {
  const rcEntry = getRcConfig("entry") || "";
  entryVerify(rcEntry);
  const rcIE = getRcConfig("ie") || ie;
  if (rcIE) {
    console.log(chalk.green(`Polyfill based on IE ${rcIE}\n`));
  }
  let polyfill = [];
  if (rcIE) {
    if (rcIE < 9) {
      console.log(chalk.red(`The option ie must be >= 9 and <= 11\n`));
      process.exit(1);
    } else if (rcIE < 11) {
      polyfill = ["react-app-polyfill/ie9", "react-app-polyfill/stable"];
    } else if (rcIE === 11) {
      polyfill = ["react-app-polyfill/ie11", "react-app-polyfill/stable"];
    } else {
      console.log(chalk.red(`The option ie must be >= 9 and <= 11\n`));
      process.exit(1);
    }
  }

  if (typeof rcEntry === "string") {
    // 单入口
    const r = {
      main: [...polyfill, rcEntry || projectPath("src/index")],
    };
    return r;
  } else if (typeof rcEntry === "object") {
    // 多入口
    delete rcEntry.vendor;
    console.log(chalk.greenBright(`Multiple entry found:\n`));
    const r = {};
    Object.keys(rcEntry).forEach(key => {
      console.log(
        `\t${path.relative(
          projectPath("./"),
          projectPath(rcEntry[key])
        )} --> <hash>/${key}.html\n`
      );
      r[key] = [...polyfill, projectPath(rcEntry[key])];
    });
    return r;
  }
};

export const resolve = () => {
  return {
    extensions: Array.from(
      new Set(
        [".js", ".ts", ".jsx", ".tsx"].concat(
          getRcConfig("extraOmittedExtensions") || []
        )
      )
    ),
    // 文件夹主文件名
    mainFiles: ["index"],
    // alias
    alias: {
      "@": projectPath("src"),
      ...(getRcConfig("extraAlias") || {}),
    },
  };
};

export const output = () => {
  return {
    path: getRcConfig("outputPath") || projectPath("dist"),
    filename:
      getRcConfig("disableHash") === true
        ? `[name].js`
        : `[name]_[hash:${getRcConfig("hashLength") || 8}].js`,
    chunkFilename:
      getRcConfig("disableHash") === true
        ? `[name].js`
        : `[name].[chunkHash:${getRcConfig("hashLength") || 8}].js`,
    publicPath:
      getRcConfig("publicPath") !== undefined ? getRcConfig("publicPath") : "/",
  };
};

export const devServer = ({ mock }) => {
  if (mock) {
    console.log(chalk.green(`Mock server started.\n`));
  }
  return {
    historyApiFallback: true,
    host: "localhost", // 服务器主机号
    stats: "none", // 只输出错误信息就可以了
    noInfo: true,
    overlay: {
      // 全屏展示错误信息
      errors: true,
      warnings: false,
    },
    proxy: getRcConfig("proxy") || {},
    before: app => {
      if (mock) {
        app.use(require("./middlewares/dev-server-mock")());
      }
    },
  };
};

export const externals = () => {
  return getRcConfig("externals") || {};
};

export const devTool = () => {
  return getRcConfig("devtool") || "eval-source-map";
};

export const module = env => {
  const extraBabelIncludes = getRcConfig("extraBabelIncludes") || [];
  const staticFileExtensions = Array.from(
    new Set([
      "webp",
      "bmp",
      "jpg",
      "jpeg",
      "gif",
      "svg",
      "png",
      "ico",
      "ttf",
      "woff",
      ...(getRcConfig("extraStaticFileExtensions") || []),
    ])
  );
  const staicFileExtensionsReg = new RegExp(
    `\.(${staticFileExtensions.join("|")})$`
  );

  const lessVars = getRcConfig("lessVars") || {};
  const tarLessVars = {};
  Object.keys(lessVars).forEach(k => {
    tarLessVars[`@${k.replace(/^@/, "")}`] = lessVars[k];
  });

  const CSS_STYLE_LOADER = [
    getRcConfig("disableCssExtract") || env === "development"
      ? { loader: "style-loader" }
      : MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
    },
  ];
  const CSS_STYLE_LOADER_WITH_MODULE = [
    getRcConfig("disableCssExtract") || env === "development"
      ? { loader: "style-loader" }
      : MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        modules: {
          mode: "local",
          exportGlobals: true,
          localIdentName:
            env === "development" ? "[path][name]__[local]" : "[hash:base64]",
        },
        localsConvention: "dashesOnly",
      },
    },
  ];
  const LESS_LOADER = [
    {
      loader: "less-loader",
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: tarLessVars,
        },
      },
    },
  ];
  const SCSS_LOADER = [
    {
      loader: "sass-loader",
      // options: {
      //   implementation: require("sass"),
      // },
    },
    {
      loader: "@epegzz/sass-vars-loader",
      options: {
        syntax: "scss",
        vars: getRcConfig("sassVars") || {},
      },
    },
  ];

  return {
    rules: [
      // js
      {
        test: /\.(tsx?|jsx?|mjs)$/,
        include: [projectPath("src"), ...extraBabelIncludes],
        use: "happypack/loader?id=babel",
      },
      // 静态文件
      {
        test: staicFileExtensionsReg,
        loader: "file-loader",
        options: {
          limit: 8192,
          name: getRcConfig("staticFileHash")
            ? `static/meida/[name].[hash:${
                getRcConfig("hashLength") || 8
              }].[ext]`
            : "static/meida/[name].[ext]",
        },
      },
      // css
      {
        oneOf: [
          {
            test: /\.css$/,
            resourceQuery: /css_modules/,
            use: CSS_STYLE_LOADER_WITH_MODULE,
          },
          {
            test: /\.css$/,
            use: CSS_STYLE_LOADER,
          },
        ],
      },
      // less
      {
        oneOf: [
          {
            test: /\.less$/,
            resourceQuery: /css_modules/,
            use: [...CSS_STYLE_LOADER_WITH_MODULE, ...LESS_LOADER],
          },
          {
            test: /\.less$/,
            use: [...CSS_STYLE_LOADER, ...LESS_LOADER],
          },
        ],
      },
      // scss
      {
        oneOf: [
          {
            test: /\.scss$/,
            resourceQuery: /css_modules/,
            use: [...CSS_STYLE_LOADER_WITH_MODULE, ...SCSS_LOADER],
          },
          {
            test: /\.scss$/,
            use: [...CSS_STYLE_LOADER, ...SCSS_LOADER],
          },
        ],
      },
      ...(getRcConfig("extraCompileRules") || []),
    ],
  };
};

const getHtmlPlugin = () => {
  const rcEntry = getRcConfig("entry") || "";
  const rcTitle = getRcConfig("title") || "";
  const rcHtmlTemplate = getRcConfig("htmlTemplate") || "";
  const rcFavicon = getRcConfig("favicon") || "";
  const IS_MULTIPLE_ENTRY = typeof rcEntry === "object";
  if (!IS_MULTIPLE_ENTRY) {
    // 单入口
    return [
      new HtmlPlugin({
        template:
          getRcConfig("htmlTemplate") ||
          path.resolve(__dirname, "../index.html"),
        filename: "index.html",
        inject: true,
        title: getRcConfig("title") || "Alexios App",
        favicon:
          getRcConfig("favicon") ||
          (fs.existsSync(projectPath("public/favicon.ico"))
            ? projectPath("public/favicon.ico")
            : undefined),
      }),
    ];
  } else {
    const res = [];
    Object.keys(rcEntry).forEach(key => {
      res.push(
        new HtmlPlugin({
          template:
            typeof rcHtmlTemplate === "string"
              ? rcHtmlTemplate
              : rcHtmlTemplate[key] || path.resolve(__dirname, "../index.html"),
          filename: `${key}.html`,
          inject: true,
          title:
            typeof rcTitle === "string"
              ? rcTitle
              : rcTitle[key] || "Alexios App",
          favicon:
            typeof rcFavicon === "string"
              ? rcFavicon ||
                (fs.existsSync(projectPath("public/favicon.ico"))
                  ? projectPath("public/favicon.ico")
                  : undefined)
              : rcFavicon[key] ||
                (fs.existsSync(projectPath("public/favicon.ico"))
                  ? projectPath("public/favicon.ico")
                  : undefined),
          chunks: [`${key}`],
        })
      );
    });
    return res;
  }
};

export const commonPlugins = () => {
  const define = getRcConfig("define") || {};
  const tarDefine = {};
  Object.keys(define).forEach(k => {
    tarDefine[k] = JSON.stringify(define[k]);
  });

  return [
    new ProgressBar({}),
    new webpack.HotModuleReplacementPlugin(),
    ...getHtmlPlugin(),
    ...(fs.existsSync(projectPath("public"))
      ? [
          new CopyWebpackPlugin({
            patterns: [
              {
                from: projectPath("public"),
                to: "./",
                noErrorOnMissing: true,
              },
            ],
          }),
        ]
      : []),
    new webpack.DefinePlugin({
      ...tarDefine,
    }),
    new HappyPack({
      id: "babel",
      loaders: [
        {
          loader: "babel-loader",
          options: babelConfig,
        },
      ],
      // @ts-ignore
      // threadPool: happyThreadPool,
      verbose: false,
    }),
    ...(getRcConfig("ignoreMomentLocale") === false
      ? []
      : [new webpack.IgnorePlugin(/^\.\/locale/, /moment$/)]),
  ];
};

export const devPlugins = conf => {
  const newworkIp = getNetworkIp();
  const newworkAddress = newworkIp
    ? `\n\t${chalk.cyan(`Network: http://${newworkIp}:${conf.port}`)}\n`
    : `\n\t${chalk.cyan(`Network: Disconnected`)}\n`;

  return [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running at: \n\n\t${chalk.cyan(
            `Local: http://127.0.0.1:${conf.port}`
          )}\n${newworkAddress}`,
          `Currently on development mode, to build your application, use \`alexios build\`\n`,
        ],
        notes: [],
      },
      clearConsole: true,
    }),
  ];
};

export const buildPlugin = analysis => {
  return [
    new MiniCssExtractPlugin({
      filename:
        getRcConfig("disableHash") === true
          ? "style/style.css"
          : `style/style-[hash:${getRcConfig("hashLength") || 8}].css`,
      chunkFilename:
        getRcConfig("disableHash") === true
          ? "style/[name].css"
          : `style/[name]-[chunkHash:${getRcConfig("hashLength") || 8}].css`,
      ignoreOrder: true,
    }),
    new CleanWebpackPlugin(),
    ...(analysis ? [new BundleAnalyzerPlugin()] : []),
  ];
};

export const optimization = () => {
  return {
    splitChunks: {
      chunks: "all",
      minSize: 30000, // 表示在压缩前的最小模块大小,默认值是30kb
      minChunks: 1, // 表示被引用次数，默认为1；
      maxAsyncRequests: 5, // 所有异步请求不得超过5个
      maxInitialRequests: 3, // 初始话并行请求不得超过3个
      automaticNameDelimiter: "_", // 名称分隔符，默认是~
      name: true, // 打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔
      cacheGroups: {
        // 设置缓存组用来抽取满足不同规则的chunk,下面以生成common为例
        common: {
          name: "common", // 抽取的chunk的名字
          priority: 10, // 优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中
          minChunks: 2, // 最少被几个chunk引用
          reuseExistingChunk: true, // 如果该chunk中引用了已经被抽取的chunk，直接引用该chunk，不会重复打包代码
          enforce: true, // 如果cacheGroup中没有设置minSize，则据此判断是否使用上层的minSize，true：则使用0，false：使用上层minSize
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: false,
      },
    },
  };
};
