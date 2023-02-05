import { RequestConfig, RuntimeAntdConfig, RunTimeLayoutConfig } from '@umijs/max';
import { theme } from 'antd';

import LayoutFooter from '@/layouts/LayoutFooter';

import SvgLogo from '@/icons/logo.svg';
import { errorConfig, requestInterceptors, responseInterceptors } from '@/services/request';
import { TimeOutConst } from './constants/requestConst';
import { isProd } from './utils/env';

/**
 * ===========================================================================
 * ================================ 运行时配置 ================================
 * ===========================================================================
 * 运行时配置和配置的区别是他跑在浏览器端，基于此，我们可以在这里写函数、tsx、import 浏览器端依赖等等，注意不要引入 node 依赖
 */
/**
 * @name 运行时antd
 * @description 通过简单的配置即可拥有 Ant Design 的 Layout（ProLayout），包括导航以及侧边栏。从而做到用户无需关心布局
 * @see https://umijs.org/docs/max/antd#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%85%8D%E7%BD%AE
 */
export const antd: RuntimeAntdConfig = memo => {
  memo.theme ||= {};
  memo.theme.algorithm = theme.darkAlgorithm;
  return memo;
};

/**
 * @name 运行时layout
 * @description 通过简单的配置即可拥有 Ant Design 的 Layout（ProLayout），包括导航以及侧边栏。从而做到用户无需关心布局
 * @see https://umijs.org/docs/max/layout-menu#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%85%8D%E7%BD%AE
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
 * @see https://umijs.org/docs/max/request#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%85%8D%E7%BD%AE
 */
export const request: RequestConfig = {
  // 统一的请求设定
  timeout: TimeOutConst,
  baseURL: isProd() ? API_PRE_URL : undefined,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },

  // 错误处理
  errorConfig,
  // 请求拦截器
  requestInterceptors,
  // 响应拦截器
  responseInterceptors,
};
