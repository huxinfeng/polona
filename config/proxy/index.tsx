import { IConfig } from '@umijs/preset-umi';

import { BaseURLEnum } from '../../src/enums/requestEnum';

/**
 * @name 代理
 * @description 代理配置
 * @see https://umijs.org/docs/guides/proxy
 * localhost:1024/api/** -> https://mock.apifox.cn/m1/2220998-0-default/api/**
 */
export default {
  dev: {
    '/api': {
      // 要代理的地址
      target: BaseURLEnum.DEV,
      // 配置了这个可以从 http 代理到 https
      // 依赖 origin 的功能可能需要这个，比如 cookie
      changeOrigin: true,
    },
  },
  test: {
    '/api': {
      target: BaseURLEnum.TEST,
      changeOrigin: true,
    },
  },
  prod: {
    '/api': {
      target: BaseURLEnum.PROD,
      changeOrigin: true,
    },
  },
  'mock-local': {
    '/api': {
      target: BaseURLEnum.MOCK_LOCAL,
      changeOrigin: true,
    },
  },
  'mock-cloud': {
    '/api': {
      target: BaseURLEnum.MOCK_CLOUD,
      changeOrigin: true,
    },
  },
} as Record<TPOLONA_ENV, IConfig['proxy']>;
