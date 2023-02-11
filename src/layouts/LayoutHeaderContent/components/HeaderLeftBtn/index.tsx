import { SaveOutlined } from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { useCreation } from 'ahooks';
import { Button, Divider, Space, Tooltip } from 'antd';

import { historyButtonList, moduleDisplayButtonList } from './config';

const HeaderLeftBtn: React.FC = () => {
  /** 渲染模块展示按钮 */
  const renderModuleDisplayButtonList = useCreation(() => {
    return moduleDisplayButtonList.map(item => {
      return (
        <Tooltip key={item.key} title={item.title}>
          <Button icon={item.icon} />
        </Tooltip>
      );
    });
  }, []);

  /** 渲染模块展示按钮 */
  const renderHistoryButtonList = useCreation(() => {
    return historyButtonList.map(item => {
      return (
        <Tooltip key={item.key} title={item.title}>
          <Button icon={item.icon} />
        </Tooltip>
      );
    });
  }, []);

  /**
   * ===========================================================================
   * ================================== 国际化 ==================================
   * ===========================================================================
   */
  const intl = useIntl();
  const intl_save = intl.formatMessage({ id: 'chart.header.tools.save' });

  return (
    <Space>
      {/* 模块展示按钮 */}
      {renderModuleDisplayButtonList}

      <Divider type="vertical" />

      {/* 历史记录按钮 */}
      {renderHistoryButtonList}

      <Divider type="vertical" />

      {/* 保存 */}
      <Tooltip title={intl_save}>
        <Button type="primary" icon={<SaveOutlined />} />
      </Tooltip>
    </Space>
  );
};

export default HeaderLeftBtn;
