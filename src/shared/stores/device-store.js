import { Store } from 'reflux';

import { deviceActions } from 'shared/actions';

import DeviceState from './device-state';

export default class DeviceStore extends Store {

  static deviceState = new DeviceState();

  utilService;
  deviceService;

  constructor() {
    super();
    this.listenables = deviceActions;
  }

  async onGetActiveDevice() {
    this.utilService.showSpinner();
    let resp = await this.deviceService.getActiveDevice();
    DeviceStore.deviceState.activeDevice = resp.data.data;
  }

}