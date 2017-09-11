import axios from 'axios';
import * as mobx from 'mobx';
import _ from 'lodash';

mobx.useStrict(true);

export default class Config {

  static isPhantomState = (state) => {
    return _.includes([
      '/login', '/signup', '/forget',
      '/user/car/new', '/user/car/edit',
    ], state.path);
  }

}
axios.defaults.baseURL = `//${window.location.host}`;
axios.defaults.headers.common['x-from'] = 'html5';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';