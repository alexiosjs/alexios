export default Alexios;

interface AlexiosProps {
  /**
   * @description root element id
   * @description 根元素的id
   * @default "root"
   */
  elementId?: string;
  /**
   * @description root React Component | React FunctionComponent
   * @description 根React组件
   */
  node: any;
}

declare class Alexios {
  /**
   * @description Alexios Constructor
   * @description Alexios 构造器
   */
  constructor(props: AlexiosProps);
  /**
   * @description 启动
   */
  launch(): void;
}
