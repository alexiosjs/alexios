import chalk from "chalk";
import fp from "./find-free-port";

const portUsage = port => {
  return new Promise(resolve => {
    fp(port)
      .then(([freePort]) => {
        if (freePort !== port) {
          const text =
            freePort - port <= 1 ? `${port}` : `${port} - ${freePort - 1}`;
          console.log(
            chalk.yellow(
              `Port [${text}] is occupied, switching to port [${freePort}]...\n`
            )
          );
        }
        resolve(freePort);
      })
      .catch(err => {
        console.log(err);
        process.exit(0);
      });
  });
};

export default portUsage;
