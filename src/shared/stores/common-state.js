import { computed, observable } from 'mobx';

export default class CommonState {

  @observable _oils = observable(null);

  @observable _brands = observable(null);

  @observable _series = observable(null);

  @observable _models = observable(null);

  @observable _regions = observable(null);

  @computed get oils() {
    return this._oils.get();
  }

  set oils(oils) {
    this._oils.set(oils);
  }

  @computed get brands() {
    return this._brands.get();
  }

  set brands(brands) {
    this._brands.set(brands);
  }

  @computed get series() {
    return this._series.get();
  }

  set series(series) {
    this._series.set(series);
  }

  @computed get models() {
    return this._models.get();
  }

  set models(models) {
    this._models.set(models);
  }

  @computed get regions() {
    return this._regions.get();
  }

  set regions(regions) {
    this._regions.set(regions);
  }

}