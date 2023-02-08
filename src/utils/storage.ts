import { JSONParse, JSONStringify } from './json';

/**
 * * 存储本地会话数据
 * @param k 键名
 * @param v 键值（无需 stringiiy）
 */
export const setLocalStorage = (k: string, v: any) => {
  try {
    localStorage.setItem(k, JSONStringify(v));
  } catch (err) {
    // TODO 错误处理
    return false;
  }
};

/**
 * * 获取本地会话数据
 * @param k 键名
 */
export const getLocalStorage = (k: string) => {
  const v = localStorage.getItem(k);
  try {
    return v ? JSONParse(v) : v;
  } catch (err) {
    // TODO 错误处理
    return v;
  }
};

/**
 * * 移除本地会话数据
 * @param k 键名
 */
export const removeLocalStorage = (k: string) => {
  localStorage.removeItem(k);
};

/**
 * * 清除本地会话数据
 */
export const clearLocalStorage = () => {
  localStorage.clear();
};

/**
 * * 存储临时会话数据
 * @param k 键名
 * @param v 键值（无需 stringiiy）
 */
export const setSessionStorage = (k: string, v: any) => {
  try {
    sessionStorage.setItem(k, JSON.stringify(v));
  } catch (err) {
    // TODO 错误处理
    return false;
  }
};

/**
 * * 获取临时会话数据
 * @param k 键名
 */
export const getSessionStorage = (k: string) => {
  const v = sessionStorage.getItem(k);
  try {
    return v ? JSONParse(v) : v;
  } catch (err) {
    // TODO 错误处理
    return v;
  }
};

/**
 * * 移除临时会话数据
 * @param k 键名
 */
export const removeSessioStorage = (k: string) => {
  sessionStorage.removeItem(k);
};

/**
 * * 清除临时会话数据
 */
export const clearSessioStorage = () => {
  sessionStorage.clear();
};

/**
 * * 设置 cookie
 * @param k 键名
 * @param v 键值（无需 stringiiy）
 * @param exdays 过期时间
 */
export const setCookie = (k: string, v: string, exdays?: number) => {
  // MaxAge 为 0 时表示浏览器不保存该 Cookie。
  // maxAge 为负数的 Cookie，为临时性 Cookie，不会被持久化，不会被写到 Cookie 文件中。
  // Cookie 信息保存在浏览器内存中，因此关闭浏览器该 Cookie 就消失了。Cookie 默认的 maxAge 值为 - 1
  const maxAge = exdays ? `max-age=${exdays * 60 * 60 * 24}` : '';
  document.cookie = `${k}=${v};${maxAge}`;
};

/**
 * * 获取 cookie
 * @param k 键名
 */
export const getCookie = (k: string) => {
  const keys = document.cookie.split(/;\s*/).map(key => key.split('='));
  for (const [_k, _v] of keys) {
    if (_k === k) return _v;
  }
  return undefined;
};

/**
 * * 移除 cookie
 * @param k 键名
 */
export const removeCookie = (k: string) => {
  setCookie(k, '', 0);
};

/**
 * * 清除 cookie
 */
export const clearCookie = () => {
  const keys = document.cookie.match(/[^ =;]+(?==)/g);
  if (keys) {
    for (let i = keys.length; i--; ) {
      removeCookie(keys[i]);
    }
  }
};
