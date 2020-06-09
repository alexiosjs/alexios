import path from "path";
import chalk from "chalk";
import portUsage from "../utils/port-usage";
import webpack from "webpack";
import WDS from "webpack-dev-server";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import getRcConfig from "../utils/get-rc-config";
import HtmlPlugin from "html-webpack-plugin";
import projectPath from "../utils/project-path";

const portCheck = async port => {
  const customPortNumber = Number(port);
  const EMPTY_PORT = await portUsage(customPortNumber);
  return EMPTY_PORT;
};

export default async () => {
  const outputPath = getRcConfig("outputPath") || projectPath("dist");
  const port = 18000;
  const EMPTY_PORT = await portCheck(port);
  const webpackServeConfig = {
    entry: path.resolve(__dirname, "../template/serve.js"),
    output: {
      publicPath: "/",
    },
    devServer: {
      contentBase: outputPath,
      historyApiFallback: true,
      host: "localhost", // 服务器主机号
      stats: "none", // 只输出错误信息就可以了
      open: true,
      noInfo: true,
      overlay: {
        // 全屏展示错误信息
        errors: true,
        warnings: false,
      },
      proxy: getRcConfig("proxy") || {},
    },
    plugins: [
      new HtmlPlugin({
        template: path.join(outputPath, "index.html"),
        inject: true,
      }),
      new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: [
            `Serve at: ${chalk.cyan(`Local: http://127.0.0.1:${EMPTY_PORT}`)}`,
          ],
          notes: [],
        },
        clearConsole: true,
      }),
    ],
  };
  const compiler = webpack({
    mode: "none",
    ...webpackServeConfig,
  });

  // @ts-ignore
  const devServer = new WDS(compiler, {
    ...webpackServeConfig.devServer,
  });

  devServer.listen(EMPTY_PORT);
};
