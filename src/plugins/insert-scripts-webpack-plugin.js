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
        HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tapAsync(
          "InsertScriptsWebpackPlugin",
          (data, callback) => {
            if (Array.isArray(this.options.scripts)) {
              /**
               * 是数组，说明是单页面应用或多页面共用一套scripts
               * 接下来判断每一个item是否是字符串形式
               * 如果是，直接插入script.src
               * 否则，排除src，其他属性作为attributes
               */
              const appendScripts = [];
              this.options.scripts.forEach(item => {
                appendScripts.push({
                  tagName: "script",
                  voidTag: false,
                  attributes:
                    typeof item === "string"
                      ? {
                          src: item,
                        }
                      : item,
                });
              });
              data.bodyTags = [...appendScripts, ...data.bodyTags];
            } else {
              const key = data.outputName.replace(/\.html$/, "");
              const tar = this.options.scripts[key] || [];
              const appendScripts = [];
              tar.forEach(item => {
                appendScripts.push({
                  tagName: "script",
                  voidTag: false,
                  attributes:
                    typeof item === "string"
                      ? {
                          src: item,
                        }
                      : item,
                });
              });
              data.bodyTags = [...appendScripts, ...data.bodyTags];
            }
            callback(null, data);
          }
        );
      }
    );
  }
}

export default InsertScriptsWebpackPlugin;
