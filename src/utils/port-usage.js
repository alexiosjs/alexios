import chalk from "chalk";
import fp from "./find-free-port";

const portUsage = port => {
  return new Promise(resolve => {
    fp(port)
      .then(([free_port]) => {
        if (free_port !== port) {
          const text =
            free_port - port <= 1 ? `${port}` : `${port} - ${free_port - 1}`;
          console.log(
            chalk.yellow(
              `Port [${text}] is occupied, switching to port [${free_port}]...\n`
            )
          );
        }
        resolve(free_port);
      })
      .catch(err => {
        console.log(err);
        process.exit(0);
      });
  });
};

export default portUsage;
