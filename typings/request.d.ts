/** 请求前置 url */
declare const API_PRE_URL: string;

// 与后端约定的响应数据格式
interface IResponseStructure {
  /** 请求是否成功 */
  success: boolean;
  /** 数据 */
  data: any;
  /** 错误状态码 */
  errorCode?: 301 | 302 | 403 | 404 | 500;
  /** 错误信息 */
  errorMessage?: string;
}
