/**
 * * 判断 NODE 环境是否是开发
 */
export const isDev = () => {
  return process.env.NODE_ENV === 'development';
};

/**
 * * 获取 polona 环境
 */
export const getPolonaEnv = () => {
  return process.env.POLONA_ENV as TPOLONA_ENV;
};
