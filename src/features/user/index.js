import { routes as homeRoutes } from './home';
import { routes as profileRoutes } from './profile';
import { routes as deviceRoutes } from './device';
import { routes as carRoutes } from './car';
import { routes as detailRoutes } from './detail';
import { routes as aboutRoutes } from './about';

const routes = [
  ...homeRoutes,
  ...profileRoutes,
  ...deviceRoutes,
  ...carRoutes,
  ...detailRoutes,
  ...aboutRoutes
]

export { routes }