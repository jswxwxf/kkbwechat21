import _ from 'lodash';

import BaseService from './base-service';

export default class UserService extends BaseService {

  storeService;

  async login(user) {
    const resp = await this._post('/2.0/login', user);
    this._setToken(resp.data.token);
    return Promise.resolve(resp);
  }

  isLoggedIn() {
    const token = this.storeService.getToken();
    return !_.isEmpty(token);
  }

  getProfile(reload = false) {
    return this._get('/2.0/me');
  }

  updateProfile(user) {
    return this._put('/2.0/user/profile', user);
  }

  async logout() {
    const resp = await this._post('/2.0/logout', null);
    this._deleteToken();
    return resp;
  }

  sendRegisterCode(mobile) {
    return this._post('/2.0/send/register', { mobile });
  }

  sendResetCode(mobile) {
    return this._post('/2.0/send/resetpassword', { mobile });
  }

  async register(user) {
    const resp = await this._post('/2.0/register', user);
    this._setToken(resp.data.token);
    return Promise.resolve(resp);
  }

  resetPassword(user) {
    return this._post('/2.0/password/reset', user);
  }

  _setToken(token) {
    this.storeService.setToken(token);
  }

  _deleteToken() {
    this.storeService.deleteToken();
  }

  updateDetail(detail) {
    return this._put('/2.0/user/moreinfo', detail);
  }

}