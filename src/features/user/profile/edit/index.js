import EditUsername from './EditUsername';
import EditPassword from './EditPassword';
import EditId from './EditId';
import EditName from './EditName';
import { EditPhoneStep1, EditPhoneDone } from './EditPhone';

const routes = [
  { path: '/user/profile/edit/username', component: EditUsername },
  { path: '/user/profile/edit/password', component: EditPassword },
  { path: '/user/profile/edit/id', component: EditId },
  { path: '/user/profile/edit/name', component: EditName },
  { path: '/user/profile/edit/phone', component: EditPhoneStep1 },
  { path: '/user/profile/edit/phone/done', component: EditPhoneDone }
]

export { routes }