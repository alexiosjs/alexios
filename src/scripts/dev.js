import { argv } from "yargs";
import commandDev from "../commands/dev";

process.on("SIGINT", () => {
  process.exit(1);
});

process.env.NODE_ENV = "development";

commandDev(argv);
