import { Col, Row } from 'antd';

import HeaderLeftBtn from './components/HeaderLeftBtn';
import HeaderRightBtn from './components/HeaderRightBtn';
import HeaderTitle from './components/HeaderTitle';

const LayoutHeaderContent: React.FC = () => {
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
