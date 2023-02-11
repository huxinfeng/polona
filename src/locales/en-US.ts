import cardToolbar from './en-US/cardToolbar.json';
import chart from './en-US/chart.json';
import menu from './en-US/menu.json';
import pages from './en-US/pages.json';

const projectName = 'Polona';
const projectDesc = 'Low-code data visualization platform';

export default {
  ...menu,
  ...pages,
  ...chart,
  ...cardToolbar,

  'polona.doc': 'official documents',
  'github.polona': 'project source code address',
  'github.openSourceProtocol': 'open source protocol',
  'github.author': "author's homepage",

  'site.title': `${projectName} - ${projectDesc}`,
};
