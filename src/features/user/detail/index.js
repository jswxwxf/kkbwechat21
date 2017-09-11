import Detail from './Detail';
import Home from './Home';
import Drive from './Drive';
import Credit from './Credit';
import Jobedu from './Jobedu';
import Social from './Social';

const routes = [
  {
    path: '/user/detail', component: Detail,
    tabs: [
      { path: '/home', tabId: 'tab-home', component: Home },
      { path: '/drive/', tabId: 'tab-drive', component: Drive },
      { path: '/credit/', tabId: 'tab-credit', component: Credit },
      { path: '/jobedu/', tabId: 'tab-jobedu', component: Jobedu },
      { path: '/social/', tabId: 'tab-social', component: Social },
    ]
  }
]

export { routes }