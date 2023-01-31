import { AxiosError, AxiosResponse, RequestConfig, RuntimeAntdConfig, RunTimeLayoutConfig } from '@umijs/max';
import { message, theme } from 'antd';

import LayoutFooter from '@/layouts/LayoutFooter';

import SvgLogo from '@/icons/logo.svg';

// 错误状态码
enum ErrorCodeEnum {
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
// 与后端约定的响应数据格式
interface IResponseStructure {
  /** 请求是否成功 */
  success: boolean;
  /** 数据 */
  data: any;
  /** 错误状态码 */
  errorCode?: ErrorCodeEnum;
  /** 错误信息 */
  errorMessage?: string;
}

/**
 * ===========================================================================
 * ================================ 运行时配置 ================================
 * ===========================================================================
 * 运行时配置和配置的区别是他跑在浏览器端，基于此，我们可以在这里写函数、tsx、import 浏览器端依赖等等，注意不要引入 node 依赖
 */
/**
 * @name 运行时antd
 * @description 通过简单的配置即可拥有 Ant Design 的 Layout（ProLayout），包括导航以及侧边栏。从而做到用户无需关心布局
 * @doc hhttps://umijs.org/docs/max/antd#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%85%8D%E7%BD%AE
 */
export const antd: RuntimeAntdConfig = memo => {
  memo.theme ||= {};
  memo.theme.algorithm = theme.darkAlgorithm;
  return memo;
};

/**
 * @name 运行时layout
 * @description 通过简单的配置即可拥有 Ant Design 的 Layout（ProLayout），包括导航以及侧边栏。从而做到用户无需关心布局
 * @doc https://umijs.org/docs/max/layout-menu#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%85%8D%E7%BD%AE
 */
export const layout: RunTimeLayoutConfig = () => {
  return {
    title: 'Polona',
    logo: SvgLogo,
    layout: 'mix',
    footerRender: () => <LayoutFooter />,
  };
};

/**
 * @name 运行时request
 * @description 配置 request 项，来为你的项目进行统一的个性化的请求设定
 * @doc https://umijs.org/docs/max/request#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%85%8D%E7%BD%AE
 */
export const request: RequestConfig = {
  // 统一的请求设定
  timeout: 1000,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },

  // 错误处理
  errorConfig: {
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
  },

  // 请求拦截器
  requestInterceptors: [
    (config: any) => {
      // TODO: 鉴权
      return config;
    },
  ],
  // 响应拦截器
  responseInterceptors: [
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
  ],
};
