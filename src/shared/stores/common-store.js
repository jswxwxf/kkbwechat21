import { Store } from 'reflux';

import { commonActions } from 'shared/actions';

import CommonState from './common-state';

export default class CommonStore extends Store {

  static commonState = new CommonState();

  utilService;
  commonService;

  constructor() {
    super();
    this.listenables = commonActions;
  }

  onGetOils() {
    CommonStore.commonState.oils = this.commonService.getOils();
  }

  async onGetBrands() {
    this.utilService.showSpinner();
    let resp = await this.commonService.getBrands();
    CommonStore.commonState.brands = resp.data.data;
  }
  
  async onGetSeries(brand_id) {
    this.utilService.showSpinner();
    let resp = await this.commonService.getSeries(brand_id);
    CommonStore.commonState.series = resp.data.data;
  }

  async onGetModels(serie_id) {
    this.utilService.showSpinner();
    let resp = await this.commonService.getModels(serie_id);
    CommonStore.commonState.models = resp.data.data;
  }

  async onGetRegions() {
    this.utilService.showSpinner();
    let resp = await this.commonService.getRegions();
    CommonStore.commonState.regions = resp.data.data;
  }

}