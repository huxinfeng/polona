import {
  CopyOutlined,
  DeleteOutlined,
  DownloadOutlined,
  FormOutlined,
  FundViewOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';
import { createElement } from 'react';

/**
 * @name 更多操作
 * @description 预览 克隆 重命名 发布 下载 删除
 */
const items: MenuProps['items'] = [
  {
    key: 'preview',
    label: '预览',
    icon: createElement(FundViewOutlined),
  },
  {
    key: 'copy',
    label: '克隆',
    icon: createElement(CopyOutlined),
  },
  {
    key: 'rename',
    label: '重命名',
    icon: createElement(FormOutlined),
  },
  {
    type: 'divider',
  },
  {
    key: 'publish',
    label: '发布',
    icon: createElement(SendOutlined),
  },
  {
    key: 'download',
    label: '下载',
    icon: createElement(DownloadOutlined),
    disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: 'delete',
    label: '删除',
    icon: createElement(DeleteOutlined),
    danger: true,
  },
];

export { items };
