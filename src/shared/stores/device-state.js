import { computed, observable } from 'mobx';

export default class DeviceState {

  @observable _activeDevice = observable(null);

  @computed get activeDevice() {
    return this._activeDevice.get();
  }

  set activeDevice(device) {
    this._activeDevice.set(device);
  }

}