import { computed, observable } from 'mobx';

export default class CarState {

  @observable _activeCar = observable(null);

  @observable _cars = observable(null);

  @observable _car = observable(null);

  @observable _safety = observable(null);

  @computed get activeCar() {
    return this._activeCar.get();
  }

  set activeCar(newCar) {
    this._activeCar.set(newCar);
  }

  @computed get cars() {
    return this._cars.get();
  }

  set cars(newCars) {
    this._cars.set(newCars);
  }

  @computed get car() {
    return this._car.get();
  }

  set car(newCar) {
    this._car.set(newCar);
  }

  @computed get safety() {
    return this._safety.get();
  }

  set safety(safety) {
    this._safety.set(safety);
  }

}