declare namespace API {
  /** 可视化列表请求参数 */
  interface IProjectListParams {
    /** 当前页 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    /** 项目名称 */
    name?: string;
    /** 状态 */
    status?: number;
  }
  /** 可视化列表项  */
  interface IProjectItemResponse {
    /** 项目ID编号 */
    id: number;
    /** 项目名称 */
    name: string;
    /** 标签 */
    tag: string;
    /** 预览图 */
    image: string;
    /** 是否发布 */
    release: boolean;
  }
}
