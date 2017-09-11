import { computed, observable } from 'mobx';

export default class UserState {

  @observable _user = observable(null);

  @computed get loggedIn() {
    return this._user.get() != null;
  }

  @computed get user() {
    return this._user.get();
  }

  @computed get detail() {
    if (this._user.get() === null) return null;
    var detail = this._user.get().userinfo;
    if (detail.children) {
      detail.boys = detail.children.substr(0, 2);
      if (detail.boys === '0男') detail.boys = "";
      detail.girls = detail.children.substr(2, 2);
      if (detail.girls === '0女') detail.girls = "";
    }
    return detail;
  }

  set user(newUser) {
    this._user.set(newUser);
  }

}