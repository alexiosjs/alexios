import net from "net";
import chalk from "chalk";

function portUsage(port) {
  let EMPTY_PORT = port;

  const server = net.createServer().listen(EMPTY_PORT);

  return new Promise((resolve, reject) => {
    server.on("listening", () => {
      server.close();
      resolve(EMPTY_PORT);
    });

    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        // 端口占用，加1重试
        console.log(
          chalk.yellow(
            `The port ${EMPTY_PORT} is occupied, retrying on port ${
              EMPTY_PORT + 1
            }...\n`
          )
        );
        resolve(portUsage(EMPTY_PORT + 1));
      } else {
        // 异常
        reject(err);
      }
    });
  });
}

export default portUsage;
