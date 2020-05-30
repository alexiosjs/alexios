import os from "os";

const getNetworkIp = () => {
  const interfaces = os.networkInterfaces();
  for (const name in interfaces) {
    if (name) {
      const iface = interfaces[name];
      for (let i = 0; i < iface.length; i += 1) {
        const alias = iface[i];
        if (
          alias.family === "IPv4" &&
          alias.address !== "127.0.0.1" &&
          !alias.internal
        ) {
          return alias.address;
        }
      }
    }
  }
};

export default getNetworkIp;
