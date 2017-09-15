import Config from 'config/config';
import { Toast } from 'shared/components';

export default class UtilService {

  f7App;

  f7Context;

  storeService;

  static _instance;

  constructor() {
    UtilService._instance = this;
  }

  showSpinner(message) {
    if (!this.f7App) return;
    if (message) {
      return this.f7App.showPreloader(message);
    }
    this.f7App.showIndicator();
  }

  hideSpinner() {
    if (!this.f7App) return;
    this.f7App.hideIndicator();
    this.f7App.hidePreloader();
  }

  /**
   * 处理 登录 和 页面回转
   */

  rememberState(state) {
    if (Config.isPhantomState(state)) return;
    this.storeService.storeItem('backState', {
      url: state.path,
      query: state.query
    });
    console.log(`${state.path} remembered`);
  }

  returnBack(defaultPage = '/welcome', query = {}) {
    let targetPage = this.storeService.getItem('backState');
    if (!targetPage) targetPage = { url: defaultPage, query };
    this._goto(targetPage);
  }

  goto(page, query = {}) {
    this._goto({
      url: page,
      query
    });
  }

  _goto(page) {
    // console.log('loading...', page);
    this.f7App.mainView.router.load(page);
  }

  refreshPage() {
    // this.f7App.mainView.router.refreshPage();
    window.location.reload();
  }

  handleLogin() {
    this.redirect('/login');
  }

  redirect(url) {
    window.location.replace(`#r${url}`);
  }

  alert(message, title = "开开保") {
    return new Promise((resolve) => {
      this.f7App.alert(message, title, () => resolve());
    })
  }

  confirm(message, title = "开开保") {
    return new Promise((resolve, reject) => {
      this.f7App.confirm(message, title, () => resolve(), () => reject());
    });
  }

  toast(message, title = "开开保") {
    Toast.showToast(message);
    // this.alert(message, title);
  }

}