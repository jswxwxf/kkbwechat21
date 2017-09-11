import { action, observable } from 'mobx';

export default class AppState {

  @observable loading = false;
  @observable loadingText = "";

  @action showSpinner(message) {
    this.loading = true;
    this.oadingText = message;
  }

  @action hideSpinner() {
    this.loading = false;
    this.loadingText = null;
  }

  @observable backdropVisible = false;

}