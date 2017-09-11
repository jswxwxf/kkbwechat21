import { routes as productRoutes } from './product';
import { routes as evalRoutes } from './eval';

const routes = [
  ...productRoutes,
  ...evalRoutes,
]

export { routes }