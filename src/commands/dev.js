import chalk from "chalk";
import webpack from "webpack";
import WDS from "webpack-dev-server";
import chokidar from "chokidar";
import portUsage from "../utils/port-usage";
import devConfigGen from "../webpack/main/dev-config.gen";
import projectPath from "../utils/project-path";

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
    /** 默认端口号 */
    port = 3000,
    /** 是否打开浏览器 */
    open = false,
    /** 是否mock */
    mock,
    /** 兼容ie */
    ie,
  } = argv;

  const EMPTY_PORT = await portCheck(port);

  const webpackDevConfig = devConfigGen({
    port: Number(EMPTY_PORT),
    open: open === "true",
    mock: mock !== "false",
    ie: Number(ie),
  });

  const compiler = webpack(webpackDevConfig);

  // @ts-ignore
  const devServer = new WDS(compiler, {
    ...webpackDevConfig.devServer,
  });

  const addWatcher = path => {
    return chokidar.watch(path, { ignoreInitial: true });
  };

  const rcWatcher = addWatcher(projectPath(".alexiosrc.js"));
  const configJsWatcher = addWatcher(projectPath(".alexios.config.js"));
  const publicPathWatcher = addWatcher(projectPath("public"));

  const ALL_WATCHERS = [rcWatcher, configJsWatcher, publicPathWatcher];

  const restart = logStr => {
    ALL_WATCHERS.forEach(E => E.close());

    devServer.close();
    process.send("SIGINT");
    console.log(logStr);
    require("../scripts/start.js").default();
  };

  rcWatcher.on("change", () => {
    restart(chalk.yellow(`.alexiosrc.js changed, restarting...\n`));
  });

  configJsWatcher.on("change", () => {
    restart(chalk.yellow(`.alexios.config.js changed, restarting...\n`));
  });

  publicPathWatcher.on("addDir", () => {
    restart(chalk.yellow(`Add public path, restarting...\n`));
  });

  devServer.listen(webpackDevConfig.devServer.port);
};
