import Icon, { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';

import { ReactComponent as SvgLogo } from '@/icons/logo.svg';

const LayoutFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      links={[
        {
          key: '开源协议',
          title: 'Open-source MIT Licensed',
          href: 'https://github.com/huxinfeng/polona/blob/main/LICENSE',
          blankTarget: true,
        },
        {
          key: '低代码数据可视化平台',
          title: <Icon component={SvgLogo} />,
          href: 'https://polona.js.org',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/huxinfeng/polona',
          blankTarget: true,
        },
        {
          key: '作者',
          title: 'huxinfeng',
          href: 'https://github.com/huxinfeng',
          blankTarget: true,
        },
      ]}
      copyright={`2023-${currentYear} Powered by 星宿君`}
    />
  );
};

export default LayoutFooter;
