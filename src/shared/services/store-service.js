import store from 'store';

export default class StoreService {

  _temp = {};

  storeTemp(k, val) {
    this._temp[k] = val;
  }

  getTemp(k) {
    return this._temp[k];
  }

  deleteTemp(k) {
    delete this._temp[k];
  }

  getToken() {
    return store.get('token')
  }

  setToken(token) {
    store.set('token', token);
  }

  deleteToken() {
    store.remove('token')
  }

  storeItem(k, val) {
    store.set(k, val);
  }

  getItem(k) {
    return store.get(k);
  }

  deleteItem(k) {
    store.remove(k);
  }

}