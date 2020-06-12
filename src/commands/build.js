// @ts-nocheck
import chalk from "chalk";
import webpack from "webpack";
import buildConfigGen from "../webpack/main/build-config.gen";

export default async argv => {
  const { ie, analysis } = argv;

  const webpackBuildConfig = buildConfigGen({
    ie: Number(ie),
    analysis: analysis === "true",
  });

  webpack(
    {
      ...webpackBuildConfig,
      mode: "production",
    },
    (err, stats) => {
      if (err || stats.hasErrors()) {
        console.log(err);
      }
      console.log(chalk.green(`Done.\n`));
    }
  );
};
