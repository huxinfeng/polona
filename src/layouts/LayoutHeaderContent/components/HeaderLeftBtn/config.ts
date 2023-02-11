import {
  AreaChartOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  HeatMapOutlined,
  InsertRowBelowOutlined,
} from '@ant-design/icons';
import { FormattedMessage } from '@umijs/max';
import { createElement } from 'react';

/**
 * @name 模块展示按钮
 * @description 图表组件 图层控制 详情设置
 */
const moduleDisplayButtonList = [
  {
    key: 'chartComponent',
    title: createElement(FormattedMessage, { id: 'chart.header.tools.chartComponent' }),
    icon: createElement(AreaChartOutlined),
    active: false,
  },
  {
    key: 'layersControl',
    title: createElement(FormattedMessage, { id: 'chart.header.tools.layersControl' }),
    icon: createElement(HeatMapOutlined),
    active: false,
  },
  {
    key: 'detailedSettings',
    title: createElement(FormattedMessage, { id: 'chart.header.tools.detailedSettings' }),
    icon: createElement(InsertRowBelowOutlined),
    active: false,
  },
];

/**
 * @name 历史记录按钮
 * @description 后退 前进
 */
const historyButtonList = [
  {
    key: 'back',
    title: createElement(FormattedMessage, { id: 'chart.header.tools.back' }),
    icon: createElement(ArrowLeftOutlined),
    active: false,
  },
  {
    key: 'forward',
    title: createElement(FormattedMessage, { id: 'chart.header.tools.forward' }),
    icon: createElement(ArrowRightOutlined),
    active: false,
  },
];

export { moduleDisplayButtonList, historyButtonList };
