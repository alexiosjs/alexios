import chalk from "chalk";
import default_setting from "../config/default-setting";
import portUsage from "../utils/port-usage";
import { webpackDev } from "../webpack/main";
import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";

/**
 * 检查端口情况，返回空闲端口
 */
const portCheck = async port => {
  // 自定义端口号
  const custom_port_number = Number(port);
  // 端口号非法
  if (!custom_port_number) {
    console.log(chalk.red(`Illegal port [${port}] !\n`));
    // 结束进程
    process.exit(0);
  }
  // 检查端口号占用情况
  console.log(chalk.green(`Checking the usage on port [${custom_port_number}]...\n`));
  // 获取空闲端口
  const EMPTY_PORT = await portUsage(custom_port_number);
  // 成功
  console.log(chalk.cyan(`Port [${EMPTY_PORT}] is available, starting now...\n`));
  return EMPTY_PORT;
};

export default async argv => {
  const {
    /** 端口号 */
    port = default_setting.PORT,
    /** 是否打开浏览器 */
    open = default_setting.OPEN,
  } = argv;

  const EMPTY_PORT = await portCheck(port);

  const webpack_dev_config = webpackDev({
    port: Number(EMPTY_PORT),
    open: open === "true",
  });

  const compiler = webpack(webpack_dev_config);

  const dev_server = new webpackDevServer(compiler, { ...webpack_dev_config.devServer });

  dev_server.listen(webpack_dev_config.devServer.port);
};
