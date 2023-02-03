/**
 * * 判断 NODE 环境是否是开发
 */
export const isDev = () => {
  return process.env.NODE_ENV === 'development';
};
