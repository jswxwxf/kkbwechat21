import Menu from './Menu';
import MainViews from './MainViews';
import Welcome from './Welcome';
import Login from './Login';
import Signup from './Signup';
import Forget from './Forget';

const routes = [
  { path: '/welcome', component: Welcome },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/forget', component: Forget }
]

export { routes, Menu, MainViews };