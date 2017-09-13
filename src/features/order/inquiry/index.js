import Basic from './Basic';
import More from './More';
import Insurance from './Insurance';

const routes = [
  { path: '/order/inquiry/basic', component: Basic },
  { path: '/order/inquiry/more', component: More },
  { path: '/order/inquiry/insurance', component: Insurance },
]

export { routes }