import fs from "fs-extra";
import projectPath from "./project-path";
import chalk from "chalk";

const postProcess = config => {
  const processFilePath = projectPath(".alexios.config.js");
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
