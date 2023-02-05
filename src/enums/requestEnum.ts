/** 请求前置 url */
export enum BaseURLEnum {
  DEV = '',
  TEST = '',
  PROD = '',
  MOCK_LOCAL = 'http://127.0.0.1:4523/m1/2220998-0-default',
  MOCK_CLOUD = 'https://mock.apifox.cn/m1/2220998-0-default',
}

// 错误状态码
export enum ErrorCodeEnum {
  /** 永久重定向 */
  MOVED_PERMANENTLY = 301,
  /** 临时重定向 */
  MOVE_TEMPORARILY = 302,
  /** 服务器拒绝 */
  FORBIDDEN = 403,
  /** 请求失败 */
  NOT_FOUND = 404,
  /** 服务器错误 */
  INTERNAL_SERVER_ERROR = 500,
}
