import projectPath from "./project-path";
import path from "path";

function getModulePackageName(module) {
  if (!module.context) return null;

  const nodeModulesPath = projectPath("node_modules");
  // const nodeModulesPath = path.join(__dirname, "../node_modules/");
  if (module.context.substring(0, nodeModulesPath.length) !== nodeModulesPath) {
    return null;
  }

  const moduleRelativePath = module.context.substring(nodeModulesPath.length);
  const [moduleDirName] = moduleRelativePath.split(path.sep);
  let packageName = moduleDirName;
  // handle tree shaking
  if (packageName.match("^_")) {
    // eslint-disable-next-line prefer-destructuring
    packageName = packageName.match(/^_(@?[^@]+)/)[1];
  }
  return packageName;
}

export default getModulePackageName;
