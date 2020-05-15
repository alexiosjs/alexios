import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import chalk from "chalk";
import portUsage from "../utils/port-usage";
import { webpackDev } from "../webpack/main";

/**
 * 检查端口情况，返回空闲端口
 */
const portCheck = async port => {
  // 自定义端口号
  const customPortNumber = Number(port);
  // 端口号非法
  if (!customPortNumber) {
    console.log(chalk.red(`Illegal port [${port}] !\n`));
    // 结束进程
    process.exit(0);
  }
  // 检查端口号占用情况
  console.log(
    chalk.green(`Checking the usage on port [${customPortNumber}]...\n`)
  );
  // 获取空闲端口
  const EMPTY_PORT = await portUsage(customPortNumber);
  // 成功
  console.log(
    chalk.cyan(`Port [${EMPTY_PORT}] is available, starting now...\n`)
  );
  return EMPTY_PORT;
};

export default async argv => {
  const {
    /** 端口号 */
    port = 3000,
    /** 是否打开浏览器 */
    open = false,
  } = argv;

  const EMPTY_PORT = await portCheck(port);

  const webpackDevConfig = webpackDev({
    port: Number(EMPTY_PORT),
    open: open === "true",
  });

  const compiler = webpack(webpackDevConfig);

  const devServer = new WebpackDevServer(compiler, {
    ...webpackDevConfig.devServer,
  });

  devServer.listen(webpackDevConfig.devServer.port);
};
