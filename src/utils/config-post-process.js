import fs from "fs-extra";
import { argv } from "yargs";
import chalk from "chalk";
import projectPath from "./project-path";

const postProcess = config => {
  const processFilePath = projectPath(argv.config || ".alexios.config.js");
  if (fs.existsSync(processFilePath)) {
    console.log(
      chalk.yellowBright(
        `.alexios.config.js is not recommended, use .alexiosrc.js instead of it.\n`
      )
    );
    const pp = require(processFilePath);
    pp(config);
  }
};

export default postProcess;
