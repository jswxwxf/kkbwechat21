import { Store } from 'reflux';
import { action } from 'mobx';

import { userActions } from 'shared/actions';

import UserState from './user-state';

export default class UserStore extends Store {

  static userState = new UserState();

  utilService;
  userService;

  constructor() {
    super();
    this.listenables = userActions;
  }

  async onLogin(user) {
    this.utilService.showSpinner();
    const resp = await this.userService.login(user);
    UserStore.userState.user = resp.data.user;
    this.utilService.returnBack();
  }

  async onCheckLogin(fetchProfile = false) {
    const isLoggedIn = this.userService.isLoggedIn();
    if (!isLoggedIn) {
      UserStore.userState.user = null;
      return;
    }
    const resp = await this.userService.getProfile();
    UserStore.userState.user = resp.data.data;
  }

  async onLogout(user) {
    await this.userService.logout();
    UserStore.userState.user = null;
    this.utilService.redirect('/welcome');
  }

  onSendCode(type, mobile) {
    if (type === 'register') return this.userService.sendRegisterCode(mobile);
    if (type === 'reset') return this.userService.sendResetCode(mobile);
  }

  async onRegister(user) {
    this.utilService.showSpinner();
    const resp = await this.userService.register(user);
    UserStore.userState.user = resp.data.user;
    this.utilService.returnBack();
  }

  async resetPassword(user) {
    this.utilService.showSpinner();
    await this.userService.resetPassword(user);
    user.name = user.mobile;
    await this.onLogin(user);
  }

  async onGetProfile(cache = true) {
    if (cache && UserStore.userState.user !== null) return UserStore.userState.user;
    this.utilService.showSpinner();
    const resp = await this.userService.getProfile();
    UserStore.userState.user = resp.data.data;
  }

  onUpdateDetail(detail) {
    this.utilService.showSpinner();
    this.userService.updateDetail(detail);
  }

  @action
  async onUpdateAvatar(avatar) {
    this.utilService.showSpinner();
    await this.userService.updateProfile(avatar);
    UserStore.userState.user.avatar = avatar.avatar.data;
  }

}