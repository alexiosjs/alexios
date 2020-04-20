import projectPath from "../../utils/project-path";

/**
 * 开发环境配置
 * @param {object} props
 * @param {number} props.port 端口号
 * @param {boolean} props.open 自动打开浏览器
 *
 * @return {object} webapckDevConfig
 */
const devGenerator = props => {
  const { port, open } = props;
  console.log(port);
  console.log(open);
  console.log(projectPath());
};

export default devGenerator;
