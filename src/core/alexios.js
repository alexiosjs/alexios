import yargs from "yargs";
import chalk from "chalk";
import commands from "../commands";

const alexios = () => {
  return yargs
    .command("dev", "Start the development server.", async ({ argv }) => {
      console.log(chalk.cyan("Starting the development server...\n"));
      await commands.dev(argv);
    })
    .command("build", "Package your application.", async () => {
      log(chalk.cyan("Building the application...\n"));
    }).argv;
};

export default alexios();
