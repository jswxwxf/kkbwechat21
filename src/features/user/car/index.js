import Car from './Car';
import Edit from './Edit';
import Status from './Status';
import Safety from './Safety';

const routes = [
  { path: '/user/car', component: Car },
  { path: '/user/car/status', component: Status },
  { path: '/user/car/safety', component: Safety },
  { path: '/user/car/:type', component: Edit },
]

export { routes }