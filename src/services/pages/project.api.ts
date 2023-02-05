import { request } from '@umijs/max';

/**
 * 获取可视化项目列表
 * @param params 检索参数
 */
export const getProjectListAPI = async (params: API.IProjectListParams) =>
  request<{ data: API.IProjectItemResponse[] }>('/api/project/list', { params });
