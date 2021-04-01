import { fork } from "child_process";

export default argv => {
  const devProcess = fork(
    require.resolve("./dev.js"),
    Object.keys(argv).map(k => `--${k}=${JSON.stringify(argv[k])}`),
    {
      stdio: "inherit",
    }
  );

  devProcess.once("exit", code => {
    process.exit(code);
  });

  process.once("exit", () => {
    devProcess.kill();
  });
};
