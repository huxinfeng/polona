import { EnvEnum } from '../enums/envEnum';

/**
 * * 判断 NODE 环境是否是开发
 */
export const isDev = () => {
  return process.env.NODE_ENV === EnvEnum.DEV;
};

/**
 * * 判断 NODE 环境是否是生产
 */
export const isProd = () => {
  return process.env.NODE_ENV === EnvEnum.PROD;
};

/**
 * * 获取 polona 环境
 */
export const getPolonaEnv = () => {
  return process.env.POLONA_ENV as TPOLONA_ENV;
};
