import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  /**
   * ===========================================================================
   * ================================= 基础配置 =================================
   * ===========================================================================
   */
  /**
   * @name history模式
   * @description 设置路由 history 类型
   * @doc https://umijs.org/docs/api/config#history
   */
  history: {
    type: 'hash',
  },

  /**
   * @name 路由的配置，不在路由中引入的文件不会编译
   * @description 只支持 path，component，routes，redirect，wrappers，title 的配置
   * @doc https://umijs.org/docs/guides/routes
   */
  // umi routes: https://umijs.org/docs/routing
  routes,

  /**
   * @name verify-commit命令的配置
   * @description 关于参数。scope 用于配置允许的 scope，不区分大小写，配置后会覆盖默认的；allowEmoji 开启后会允许加 EMOJI 前缀，比如 💥 feat(模块): 添加了个很棒的功能
   * @doc https://umijs.org/docs/api/config#verifycommit
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
   * @doc https://umijs.org/docs/max/antd#antd
   */
  antd: {
    configProvider: {},
  },

  /**
   * @name layout插件
   * @description 只需通过简单的配置即可拥有 Ant Design 的 Layout（ProLayout），包括导航以及侧边栏。从而做到用户无需关心布局
   * @doc https://umijs.org/docs/max/layout-menu
   */
  layout: {},

  /**
   * @name 国际化插件
   * @doc https://umijs.org/docs/max/i18n
   */
  locale: {},

  /**
   * @name 网络请求配置
   * @description 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案
   * @doc https://umijs.org/docs/max/request
   */
  request: {},
});
