import BaseService from './base-service';

export default class DeviceService extends BaseService {

  carService;

  getDevices() {
    return this._get(`/2.0/devices`);
  }

  bindDevice(device) {
    return this._post('/2.0/devices', device);
  }

  bindCar(car, device) {
    return this._put(`/2.0/cars/${car.car_id}/bind`, device);
  }

  getDevice(car_id) {
    return this._get(`/2.0/cars/${car_id}/device`);
  }

  async getActiveDevice() {
    let car_id = await this.carService.getActiveCarId();
    return await this.getDevice(car_id);
  }

}