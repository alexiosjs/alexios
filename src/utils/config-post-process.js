import fs from "fs-extra";
import projectPath from "./project-path";
import chalk from "chalk";

const postProcess = config => {
  const processFilePath = projectPath(".tiga.config.js");
  if (fs.existsSync(processFilePath)) {
    console.log(
      chalk.yellowBright(
        `.tiga.config.js is not recommended, use .tigarc.js instead of it.\n`
      )
    );
    const pp = require(processFilePath);
    pp(config);
  }
};

export default postProcess;
