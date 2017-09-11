import { Store } from 'reflux';

import { carActions } from 'shared/actions';

import CarState from './car-state';

export default class CarStore extends Store {

  static carState = new CarState();

  utilService;
  carService;

  constructor() {
    super();
    this.listenables = carActions;
  }

  async onGetActiveCar() {
    this.utilService.showSpinner();
    let resp = await this.carService.getActiveCar();
    CarStore.carState.activeCar = resp.data.data;
  }

  async onSetActiveCar(car_id) {
    this.utilService.showSpinner();
    await this.carService.setActiveCarId(car_id);
    CarStore.carState.activeCar = null;
  }

  async onGetCars() {
    this.utilService.showSpinner();
    let resp = await this.carService.getCars();
    CarStore.carState.cars = resp.data.data;
  }

  async onGetCar(car_id) {
    this.utilService.showSpinner();
    let resp = await this.carService.getCar(car_id);
    CarStore.carState.car = resp.data.data;
  }

  async onAddCar(car) {
    this.utilService.showSpinner();
    let resp = await this.carService.addCar(car);
    await this.carService.setActiveCarId(resp.data.car_id);
    CarStore.carState.cars = null;
    CarStore.carState.activeCar = null;
    this.utilService.returnBack();
  }

  async onUpdateCar(car) {
    this.utilService.showSpinner();
    await this.carService.updateCar(car);
    this.utilService.returnBack();
  }

  async onGetSafety() {
    CarStore.carState.safety = null;
    this.utilService.showSpinner();
    let resp = await this.carService.getActiveCarSafety();
    CarStore.carState.safety = resp.data.data;
  }

  onUpdateSafety(car_id, safety) {
    this.utilService.showSpinner();
    this.carService.setCarSafety(car_id, safety);
  }

}