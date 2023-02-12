import { PathEnum } from '@/enums/routerEnum';
import { useMatch } from '@umijs/max';
import { Col, Row } from 'antd';

import HeaderLeftBtn from './components/HeaderLeftBtn';
import HeaderRightBtn from './components/HeaderRightBtn';
import HeaderTitle from './components/HeaderTitle';

const LayoutHeaderContent: React.FC = () => {
  const match = useMatch(PathEnum.CHART);
  /** 只有 chart 页面才显示 */
  if (!match) {
    return null;
  }

  return (
    <Row justify="space-between">
      <Col>
        <HeaderLeftBtn />
      </Col>
      <Col>
        <HeaderTitle />
      </Col>
      <Col>
        <HeaderRightBtn />
      </Col>
    </Row>
  );
};

export default LayoutHeaderContent;
