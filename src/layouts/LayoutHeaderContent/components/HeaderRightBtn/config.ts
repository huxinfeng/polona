import { FundViewOutlined, SendOutlined } from '@ant-design/icons';
import { FormattedMessage } from '@umijs/max';
import { createElement } from 'react';

/**
 * @name 预览、发布按钮
 * @description 预览 发布
 */
const previewPublishButtonList = [
  {
    key: 'preview',
    title: createElement(FormattedMessage, { id: 'chart.header.tools.preview' }),
    icon: createElement(FundViewOutlined),
    active: false,
  },
  {
    key: 'publish',
    title: createElement(FormattedMessage, { id: 'chart.header.tools.publish' }),
    icon: createElement(SendOutlined),
    active: false,
  },
];

export { previewPublishButtonList };
