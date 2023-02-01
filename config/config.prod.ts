import { defineConfig } from '@umijs/max';

export default defineConfig({
  /**
   * @name 代码打包拆分
   * @description 提供 code splitting 的策略方案
   * @doc https://umijs.org/docs/api/config#codesplitting
   */
  codeSplitting: {
    jsStrategy: 'granularChunks',
    jsStrategyOptions: {},
  },

  /**
   * @name 检测未使用的代码
   * @description 检测未使用的文件和导出，仅在 build 阶段开启
   * @doc https://umijs.org/docs/api/config#deadcode
   */
  deadCode: {
    exclude: ['src/favicon.ico'],
  },

  /**
   * @name ts类型检测
   * @description 开启 TypeScript 的类型检查。基于 fork-ts-checker-webpack-plugin，配置项可参考 fork-ts-checker-webpack-plugin 的 Options
   * @doc https://umijs.org/docs/api/config#forktschecker
   */
  forkTSChecker: {},

  /**
   * @name 幽灵依赖检测
   * @description 当使用未在 package.json 中声明的依赖，以及也没有通过 alias 或 externals 进行配置时，会抛错并提醒
   * @doc https://umijs.org/docs/api/config#phantomdependency
   */
  phantomDependency: {},

  /**
   * @name 配置webpack的publicPath
   * @description 生产环境通过配合hash路由可以访问
   * @doc https://umijs.org/docs/api/config#publicpath
   */
  publicPath: './',

  /**
   * @name manifest
   * @description 开启 build 时生成额外的 manifest 文件，用于描述产物
   * @doc https://umijs.org/docs/api/config#manifest
   */
  manifest: {},
});