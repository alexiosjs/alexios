import chalk from "chalk";

const entryVerify = entry => {
  let ENTRY_LEGAL = false;
  if (typeof entry === "string") {
    ENTRY_LEGAL = true;
  } else if (Object.prototype.toString.call(entry) === "[object Object]") {
    if (Object.values(entry).every(e => typeof e === "string")) {
      ENTRY_LEGAL = true;
    }
  }
  if (!ENTRY_LEGAL) {
    console.log(
      chalk.red(
        `Type of entry must be "string" or "{ [key: string]: string }"\n`
      )
    );
    process.exit(1);
  }
};

export default entryVerify;
