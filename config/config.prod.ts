import { defineConfig } from '@umijs/max';

export default defineConfig({
  /**
   * @name 代码打包拆分
   * @description 提供 code splitting 的策略方案
   * @see https://umijs.org/docs/api/config#codesplitting
   */
  codeSplitting: {
    jsStrategy: 'granularChunks',
    jsStrategyOptions: {},
  },

  /**
   * @name 检测未使用的代码
   * @description 检测未使用的文件和导出，仅在 build 阶段开启
   * @see https://umijs.org/docs/api/config#deadcode
   */
  deadCode: {
    exclude: ['src/favicon.ico'],
  },

  /**
   * @name ts类型检测
   * @description 开启 TypeScript 的类型检查。基于 fork-ts-checker-webpack-plugin，配置项可参考 fork-ts-checker-webpack-plugin 的 Options
   * @see https://umijs.org/docs/api/config#forktschecker
   */
  forkTSChecker: {},

  /**
   * @name 幽灵依赖检测
   * @description 当使用未在 package.json 中声明的依赖，以及也没有通过 alias 或 externals 进行配置时，会抛错并提醒
   * @see https://umijs.org/docs/api/config#phantomdependency
   */
  phantomDependency: {},

  /**
   * @name manifest
   * @description 开启 build 时生成额外的 manifest 文件，用于描述产物
   * @see https://umijs.org/docs/api/config#manifest
   */
  manifest: {},
});
