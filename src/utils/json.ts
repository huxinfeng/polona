import { isFunction, isString, isUndefined } from './type';

/**
 * * JSON序列化，支持函数和 undefined
 * @param data 数据
 */
export const JSONStringify = (data: any) => {
  return JSON.stringify(
    data,
    (_, v) => {
      // 处理 undefined 丢失问题
      if (isUndefined(v)) {
        return null;
      }
      // 处理函数丢失问题
      if (isFunction(v)) {
        return `${v}`;
      }
      return v;
    },
    2,
  );
};

/**
 * * JSON反序列化，支持函数和 undefined
 * @param data 数据
 */
export const JSONParse = (data: string) => {
  return JSON.parse(data, (_, v) => {
    if (isString(v) && (v as string).includes('function')) {
      return new Function(`return ${v}`)();
    }
    return v;
  });
};
