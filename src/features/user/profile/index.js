import { routes as editRoutes } from './edit';
import Profile from './Profile';

const routes = [
  {
    path: '/user/profile',
    component: Profile
  },
  ...editRoutes
]

export { routes }