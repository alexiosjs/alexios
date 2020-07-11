import HtmlWebpackPlugin from "html-webpack-plugin";

class InsertScriptsWebpackPlugin {
  constructor(options) {
    this.options = options;
  }

  // eslint-disable-next-line class-methods-use-this
  apply(compiler) {
    compiler.hooks.compilation.tap(
      "InsertScriptsWebpackPlugin",
      compilation => {
        HtmlWebpackPlugin.getHooks(
          compilation
        ).beforeAssetTagGeneration.tapAsync(
          "InsertScriptsWebpackPlugin",
          (data, callback) => {
            if (Array.isArray(this.options.scripts)) {
              // 是数组，说明是单页面应用或多页面共用一套scripts
              data.assets.js = [...this.options.scripts, ...data.assets.js];
            } else {
              const key = data.outputName.replace(/\.html$/, "");
              const tar = this.options.scripts[key] || [];
              data.assets.js = [...tar, ...data.assets.js];
            }
            callback(null, data);
          }
        );
      }
    );
  }
}

export default InsertScriptsWebpackPlugin;
