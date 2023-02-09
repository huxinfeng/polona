import { Settings as LayoutSettings } from '@ant-design/pro-components';

import SvgLogo from '@/icons/logo.svg';

const layoutSettings: LayoutSettings & {
  logo?: string;
} = {
  logo: SvgLogo,
  layout: 'mix',
  navTheme: 'realDark',
};

export default layoutSettings;
