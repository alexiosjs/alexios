const chalk = require("chalk");

const msgPath = process.env.HUSKY_GIT_PARAMS;

const msg = require("fs").readFileSync(msgPath, "utf-8").trim();

const commitRE = /^(revert: )?(feat|fix|docs|style|refactor|perf|test|workflow|ci|chore|types|wip|merge)(\(.+\))?: .{1,50}/;

if (!commitRE.test(msg)) {
  console.log(
    chalk.red("\nTo create a commit message, use `npm run commit`!\n")
  );
  process.exit(1);
}
