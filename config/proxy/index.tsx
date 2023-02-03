import { IConfig } from '@umijs/preset-umi';

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
      target: '',
      // 配置了这个可以从 http 代理到 https
      // 依赖 origin 的功能可能需要这个，比如 cookie
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  test: {
    '/api': {
      target: '',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  prod: {
    '/api': {
      target: '',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  'mock-local': {
    '/api': {
      target: 'http://localhost:4523/m1/2220998-0-default',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  'mock-cloud': {
    '/api': {
      target: 'https://mock.apifox.cn/m1/2220998-0-default',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
} as Record<TPOLONA_ENV, IConfig['proxy']>;
