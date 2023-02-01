import {
  CopyOutlined,
  DeleteOutlined,
  DownloadOutlined,
  FormOutlined,
  FundViewOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { FormattedMessage } from '@umijs/max';
import { MenuProps } from 'antd';
import { createElement } from 'react';

/**
 * @name 更多操作
 * @description 预览 克隆 重命名 发布 下载 删除
 */
const items: MenuProps['items'] = [
  {
    key: 'preview',
    label: createElement(FormattedMessage, { id: 'cardToolbar.preview' }),
    icon: createElement(FundViewOutlined),
  },
  {
    key: 'copy',
    label: createElement(FormattedMessage, { id: 'cardToolbar.copy' }),
    icon: createElement(CopyOutlined),
  },
  {
    key: 'rename',
    label: createElement(FormattedMessage, { id: 'cardToolbar.rename' }),
    icon: createElement(FormOutlined),
  },
  {
    type: 'divider',
  },
  {
    key: 'publish',
    label: createElement(FormattedMessage, { id: 'cardToolbar.publish' }),
    icon: createElement(SendOutlined),
  },
  {
    key: 'download',
    label: createElement(FormattedMessage, { id: 'cardToolbar.download' }),
    icon: createElement(DownloadOutlined),
    disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: 'delete',
    label: createElement(FormattedMessage, { id: 'cardToolbar.delete' }),
    icon: createElement(DeleteOutlined),
    danger: true,
  },
];

export { items };
