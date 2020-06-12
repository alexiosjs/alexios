import { fork } from "child_process";

export default () => {
  const args = process.argv.slice(3);

  const devProcess = fork(require.resolve("./dev.js"), args, {
    stdio: "inherit",
  });

  devProcess.once("exit", code => {
    process.exit(code);
  });

  process.once("exit", () => {
    devProcess.kill();
  });
};
