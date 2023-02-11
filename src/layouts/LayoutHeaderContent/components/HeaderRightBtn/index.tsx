import { useCreation } from 'ahooks';
import { Button, Space } from 'antd';

import { previewPublishButtonList } from './config';

const HeaderRightBtn: React.FC = () => {
  /** 渲染模块展示按钮 */
  const renderPreviewPublishButtonList = useCreation(() => {
    return previewPublishButtonList.map(item => {
      return (
        <Button key={item.key} icon={item.icon}>
          <span>{item.title}</span>
        </Button>
      );
    });
  }, []);

  return (
    <Space>
      {/* 预览发布按钮 */}
      {renderPreviewPublishButtonList}
    </Space>
  );
};

export default HeaderRightBtn;
