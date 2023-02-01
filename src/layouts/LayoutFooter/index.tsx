import Icon, { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';

import { ReactComponent as SvgLogo } from '@/icons/logo.svg';

const LayoutFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  /**
   * 国际化
   */
  const intl = useIntl();
  const intl_openSourceProtocol = intl.formatMessage({ id: 'github.openSourceProtocol' });
  const intl_polonaDoc = intl.formatMessage({ id: 'polona.doc' });
  const intl_githubPolona = intl.formatMessage({ id: 'github.polona' });
  const intl_githubAuthor = intl.formatMessage({ id: 'github.author' });

  return (
    <DefaultFooter
      links={[
        {
          key: intl_openSourceProtocol,
          title: 'Open-source MIT Licensed',
          href: 'https://github.com/huxinfeng/polona/blob/main/LICENSE',
          blankTarget: true,
        },
        {
          key: intl_polonaDoc,
          title: <Icon component={SvgLogo} />,
          href: 'https://polona.js.org',
          blankTarget: true,
        },
        {
          key: intl_githubPolona,
          title: <GithubOutlined />,
          href: 'https://github.com/huxinfeng/polona',
          blankTarget: true,
        },
        {
          key: intl_githubAuthor,
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
