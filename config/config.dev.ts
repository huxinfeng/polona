import { defineConfig } from '@umijs/max';

import { PolonaEnvEnum } from '../src/enums/envEnum';
import { getPolonaEnv } from '../src/utils/env';
import proxy from './proxy';

export default defineConfig({
  /**
   * @name 开启clickToComponent模式
   * @description 开启后，可通过 Option+Click/Alt+Click 点击组件跳转至编辑器源码位置，Option+Right-click/Alt+Right-click 可以打开上下文，查看父组件
   * @doc https://umijs.org/docs/api/config#clicktocomponent
   */
  clickToComponent: {},

  /**
   * @name 代理
   * @description proxy 功能仅在 dev 时有效
   * @see https://umijs.org/docs/api/config#proxy
   */
  proxy: proxy[getPolonaEnv() || PolonaEnvEnum.DEV],
});
