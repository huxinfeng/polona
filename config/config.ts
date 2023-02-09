import { defineConfig } from '@umijs/max';

import { isDev } from '../src/utils/env';
import routes from './routes';

export default defineConfig({
  /**
   * ===========================================================================
   * ================================= 基础配置 =================================
   * ===========================================================================
   */
  /**
   * @name 开启hash模式
   * @description 让 build 之后的产物包含 hash 后缀。通常用于增量发布和避免浏览器加载缓存
   * @see https://umijs.org/docs/api/config#hash
   */
  hash: true,

  /**
   * @name history模式
   * @description 设置路由 history 类型
   * @see https://umijs.org/docs/api/config#history
   */
  history: {
    type: 'hash',
  },

  /**
   * @name npmClient
   * @description npmClient
   * @see https://umijs.org/docs/api/config#npmclient
   */
  npmClient: 'npm',

  /**
   * @name 配置webpack的publicPath
   * @description 生产环境通过配合 hash 路由可以访问
   * @see https://umijs.org/docs/api/config#publicpath
   */
  publicPath: isDev() ? '/' : './',

  /**
   * @name 路由的配置，不在路由中引入的文件不会编译
   * @description 只支持 path，component，routes，redirect，wrappers，title 的配置
   * @see https://umijs.org/docs/guides/routes
   */
  // umi routes: https://umijs.org/docs/routing
  routes,

  /**
   * @name verify-commit命令的配置
   * @description 关于参数。scope 用于配置允许的 scope，不区分大小写，配置后会覆盖默认的；allowEmoji 开启后会允许加 EMOJI 前缀，比如 💥 feat(模块): 添加了个很棒的功能
   * @see https://umijs.org/docs/api/config#verifycommit
   */
  verifyCommit: {
    allowEmoji: true,
  },

  /**
   * ===========================================================================
   * ======================= 以下都是 @umijs/max 的插件配置 =======================
   * ===========================================================================
   */
  /**
   * @name antd插件
   * @description 内置了 babel import 插件
   * @see https://umijs.org/docs/max/antd#antd
   */
  antd: {
    configProvider: {},
  },

  /**
   * @name 一个全局的初始数据流，可以用它在插件之间共享数据
   * @description 可以用来存放一些全局的数据，比如用户信息，或者一些全局的状态，全局初始状态在整个 Umi 项目的最开始创建
   * @see https://umijs.org/docs/max/data-flow
   */
  initialState: {},

  /**
   * @name layout插件
   * @description 只需通过简单的配置即可拥有 Ant Design 的 Layout（ProLayout），包括导航以及侧边栏。从而做到用户无需关心布局
   * @see https://umijs.org/docs/max/layout-menu
   */
  layout: {},

  /**
   * @name 国际化插件
   * @see https://umijs.org/docs/max/i18n
   */
  locale: {},

  /**
   * @name 数据流插件
   * @description 数据流插件
   * @see https://umijs.org/docs/max/data-flow
   */
  model: {},

  /**
   * @name 网络请求配置
   * @description 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案
   * @see https://umijs.org/docs/max/request
   */
  request: {},
});
