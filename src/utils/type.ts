export const isNumber = (p: any) => {
  return typeof p === 'number';
};

export const isBoolean = (p: any) => {
  return typeof p === 'boolean';
};

export const isString = (p: any) => {
  return typeof p === 'string';
};

export const isUndefined = (p: any) => {
  return typeof p === 'undefined';
};

export const isNull = (p: any) => {
  return Object.prototype.toString.call(p) === '[object Null]';
};

export const isSymbol = (p: any) => {
  return typeof p === 'symbol';
};

export const isBigint = (p: any) => {
  return typeof p === 'bigint';
};

export const isObject = (p: any) => {
  return Object.prototype.toString.call(p) === '[object Object]';
};

export const isFunction = (p: any) => {
  return typeof p === 'function';
};

export const isArray = (p: any) => {
  return Object.prototype.toString.call(p) === '[object Array]';
};

export const isDate = (p: any) => {
  return Object.prototype.toString.call(p) === '[object Date]';
};

export const isMath = (p: any) => {
  return Object.prototype.toString.call(p) === '[object Math]';
};

export const isRegExp = (p: any) => {
  return Object.prototype.toString.call(p) === '[object RegExp]';
};

export const isArguments = (p: any) => {
  return Object.prototype.toString.call(p) === '[object Arguments]';
};

export const isReflect = (p: any) => {
  return Object.prototype.toString.call(p) === '[object Reflect]';
};

export const isIntl = (p: any) => {
  return Object.prototype.toString.call(p) === '[object Intl]';
};

export const isError = (p: any) => {
  return Object.prototype.toString.call(p) === '[object Error]';
};

export const isWindow = (p: any) => {
  return Object.prototype.toString.call(p) === '[object Window]';
};

export const isHTMLDocument = (p: any) => {
  return Object.prototype.toString.call(p) === '[object HTMLDocument]';
};

/**
 * * 获取值类型
 * @param p 值
 */
export const getType = (p: any) => {
  const type = typeof p;
  if (type !== 'object') {
    return type;
  }
  return Object.prototype.toString
    .call(p)
    .replace(/^\[object (\S+)\]$/, '$1')
    .toLowerCase();
};
