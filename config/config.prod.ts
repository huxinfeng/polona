import { defineConfig } from '@umijs/max';

export default defineConfig({
  /**
   * @name 配置webpack的publicPath
   * @description 生产环境通过配合hash路由可以访问
   * @doc https://umijs.org/docs/api/config#publicpath
   */
  publicPath: './',
});
