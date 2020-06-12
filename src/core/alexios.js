import yargs from "yargs";
import chalk from "chalk";
import commands from "../commands";

const { log } = console;

const core = () => {
  return yargs
    .command("dev", "Start the development server.", () => {
      log(chalk.cyan("Starting the development server...\n"));
      process.env.NODE_ENV = "development";
      require("../scripts/start.js").default();
    })
    .command("build", "Package your application.", async ({ argv }) => {
      log(chalk.cyan("Packaging your application...\n"));
      process.env.NODE_ENV = "production";
      await commands.build(argv);
    })
    .command("serve", "Verify your packaged files.", async () => {
      log(
        chalk.yellow(
          "Just for local validation, do not use this in production...\n"
        )
      );
      await commands.serve();
    }).argv;
};

export default core();
