import _ from 'lodash';

import BaseService from './base-service';

export default class CarService extends BaseService {

  userService;

  getCars() {
    return this._get('/2.0/cars');
  }

  getCar(car_id) {
    return this._get(`/2.0/cars/${car_id}`);
  }

  addCar(car) {
    return this._post('/2.0/cars', car);
  }

  updateCar(car) {
    return this._put(`/2.0/cars/${car.car_id}`, car);
  }

  getStatus(car_id) {
    return this._get(`/2.0/cars/${car_id}/ecu`);
  }

  async getActiveCar() {
    let car_id = await this.getActiveCarId();
    return await this.getCar(car_id);
  }

  async getActiveCarId() {

    let resp = await this.userService.getProfile();
    let car_id = resp.data.data.vehicle_id;
    if (car_id !== '' && car_id !== '0' && car_id !== null) return car_id;

    resp = await this.getCars();
    let cars = resp.data.data;
    if (_.isEmpty(cars)) throw new Error({ error: '系统还没有配置任何车辆' });

    let car = cars[0];
    await this.setActiveCarId(car.car_id);
    return car.car_id;

  }

  setActiveCarId(car_id) {
    return this.userService.updateProfile({ vehicle_id: car_id });
  }

  async getActiveCarSafety() {
    let car_id = await this.getActiveCarId();
    let resp = await this.getCarSafety(car_id);
    resp.data.data.car_id = car_id;
    return resp;
  }

  getCarSafety(car_id) {
    return this._get(`/2.0/cars/${car_id}/setting`);
  }

  setCarSafety(car_id, safety) {
    return this._put(`/2.0/cars/${car_id}/setting`, safety);
  }

  async getActiveCarAssess() {
    let car_id = await this.getActiveCarId();
    let assess = await this.getCarAssess(car_id);
    assess.car_id = car_id;
    return assess;
  }

  getCarAssess(car_id) {
    return this._get(`/2.0/cars/${car_id}/assess`);
  }

}