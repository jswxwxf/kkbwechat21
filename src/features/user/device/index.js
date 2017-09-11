import { routes as bindRoutes } from './bind';

import Device from './Device';

const routes = [
  { path: '/user/device', component: Device, },
  ...bindRoutes,
]

export { routes }