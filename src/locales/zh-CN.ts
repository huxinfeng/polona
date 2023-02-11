import cardToolbar from './zh-CN/cardToolbar.json';
import chart from './zh-CN/chart.json';
import menu from './zh-CN/menu.json';
import pages from './zh-CN/pages.json';

const projectName = 'Polona';
const projectDesc = '低代码数据可视化平台';

export default {
  ...menu,
  ...pages,
  ...chart,
  ...cardToolbar,

  'polona.doc': '官方文档',
  'github.polona': '项目源码地址',
  'github.openSourceProtocol': '开源协议',
  'github.author': '作者主页',

  'site.title': `${projectName} - ${projectDesc}`,
};
