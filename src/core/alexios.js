import yargs from "yargs";
import chalk from "chalk";
import commands from "../commands";

const { log } = console;

const alexios = () => {
  return yargs
    .command("dev", "Start the development server.", async ({ argv }) => {
      log(chalk.cyan("Starting the development server...\n"));
      process.env.NODE_ENV = "development";
      await commands.dev(argv);
    })
    .command("build", "Package your application.", async () => {
      log(chalk.cyan("Building the application...\n"));
      process.env.NODE_ENV = "production";
    })
    .command("watch", "Watch your file system change.", async () => {
      log(chalk.cyan("Watch your file system change...\n"));
    }).argv;
};

export default alexios();
