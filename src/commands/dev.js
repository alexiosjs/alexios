import chalk from "chalk";
import defaultSetting from "../config/default-setting";
import portUsage from "../utils/port-usage";

export default async (argv) => {
  const { port = defaultSetting.PORT } = argv;
  // Custom port number
  const customPortNumber = Number(port);
  // If the port number is illegal
  if (!customPortNumber) {
    console.log(chalk.red(`Illegal port number ${port} !\n`));
    process.exit(0);
  }
  // checking port usage
  console.log(
    chalk.green(`Checking the usage on port ${customPortNumber}...\n`)
  );
  // Get free port number
  const EMPTY_PORT = await portUsage(customPortNumber);
  console.log(
    chalk.cyan(`The port ${EMPTY_PORT} is available, starting now...\n`)
  );
};
