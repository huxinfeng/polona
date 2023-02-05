import { AxiosError, AxiosResponse, RequestConfig } from '@umijs/max';
import { message } from 'antd';

import { ErrorCodeEnum } from '@/enums/requestEnum';

/** 错误处理 */
export const errorConfig: RequestConfig['errorConfig'] = {
  // 错误抛出
  errorThrower: (res: IResponseStructure) => {
    const { errorMessage } = res;
    const error = new Error(errorMessage, { cause: res });
    error.name = 'BizError';
    throw error; // 抛出自制的错误
  },
  // 错误接收及处理
  errorHandler: (error, opts) => {
    if (opts?.skipErrorHandler) throw error;
    // 我们的 errorThrower 抛出的错误。
    if (error.name === 'BizError') {
      const errorInfo = error.cause as IResponseStructure;
      switch (errorInfo.errorCode) {
        case ErrorCodeEnum.MOVED_PERMANENTLY:
        case ErrorCodeEnum.MOVE_TEMPORARILY:
          // TODO: 重定向
          break;

        case ErrorCodeEnum.FORBIDDEN:
          // TODO: 服务器拒绝
          break;

        case ErrorCodeEnum.NOT_FOUND:
          // TODO: 数据找不到
          break;

        case ErrorCodeEnum.INTERNAL_SERVER_ERROR:
          // TODO: 服务器错误
          break;

        default:
        // TODO: 默认
      }
    } else if ((error as AxiosError).response) {
      // Axios 的错误
      // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
      message.error(`Response status: ${(error as AxiosError).response?.status}`);
    } else if ((error as AxiosError).request) {
      // 请求已经成功发起，但没有收到响应
      // \`error.request\` 在浏览器中是 XMLHttpRequest 的实例，
      // 而在node.js中是 http.ClientRequest 的实例
      message.error('None response! Please retry.');
    } else {
      // 发送请求时出了点问题
      message.error('Request error, please retry.');
    }
  },
};

/** 请求拦截器 */
export const requestInterceptors: RequestConfig['requestInterceptors'] = [
  (config: any) => {
    // TODO: 鉴权
    return config;
  },
];

/** 响应拦截器 */
export const responseInterceptors: RequestConfig['responseInterceptors'] = [
  response => {
    // 数据请求失败时处理
    const { data } = response as AxiosResponse<IResponseStructure, any>;
    if (!data.success) {
      message.error('请求失败！');
    }
    // 数据为标准的列表时处理
    const isStandardList = Object.keys(data.data).join() === 'list,total,page';
    if (isStandardList) {
      (data as any).total = data.data.total;
      (data as any).page = data.data.page;
      (data as any).data = data.data.list;
    }
    return response;
  },
];
