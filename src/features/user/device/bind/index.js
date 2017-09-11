import Device from './Device';
import Car from './Car';
import Result from './Result';

const routes = [
  { path: '/user/device/bind', component: Device, },
  { path: '/user/device/bind/car', component: Car, },
  { path: '/user/device/bind/result', component: Result, },
]

export { routes }