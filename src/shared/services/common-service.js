import _ from 'lodash';

import BaseService from './base-service';

var oils = [
  { oil_id: '1', oil_type: '汽油', name_cn: '92号' },
  { oil_id: '2', oil_type: '汽油', name_cn: '93号' },
  { oil_id: '3', oil_type: '汽油', name_cn: '95号' },
  { oil_id: '4', oil_type: '汽油', name_cn: '97号' },
  { oil_id: '5', oil_type: '柴油', name_cn: '0号' },
  { oil_id: '6', oil_type: '柴油', name_cn: '10号' },
  { oil_id: '7', oil_type: '柴油', name_cn: '20号' },
  { oil_id: '8', oil_type: '柴油', name_cn: '35号' }
];

export default class CommonService extends BaseService {

  static _instance;

  constructor() {
    super();
    CommonService._instance = this;
  }

  getProvinces() {
    return this._get('/2.0/provinces');
  }

  getCities() {
    return this._get('/2.0/cities');
  }

  getRegions() {
    return _.memoize(this._get('/2.0/regions'));
  }

  getInquiryCities() {
    return this._get('/2.0/quote/axa/cities');
  }

  getCityCompanies(city_id) {
    return this._get(`cities/${city_id}/companies`);
  }

  getBrands() {
    return this._get('/2.0/brands');
  }

  getSeries(brand_id) {
    return this._get(`/2.0/series/${brand_id}`);
  }

  getModels(series_id) {
    return this._get(`/2.0/models/${series_id}`);
  }

  getOils() {
    return oils;
  }

}