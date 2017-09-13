import BaseService from './base-service';

export default class InquiryService extends BaseService {

  getProducts(city_id) {
    return this._get(`/2.0/quote/${city_id}/product`);
  }

  inquiryBasic(inquiry) {
    return this._post(`/2.0/quote/basic`, {
      product_id: inquiry.product_id,
      license_no: inquiry.license_no
    });
  }

  inquiryMore(inquiry) {
    return this._post(`/2.0/quote/more`, {
      product_id: inquiry.product_id,
      city_id: inquiry.city,
      license_no: inquiry.license_no
    })
  }

  commitInquiry(inquiry) {
    return this._post(`/2.0/quote/result`, inquiry);
  }

  inquiryDetail(id) {
    return this._get(`/2.0/quote/detail/${id}`);
  }

  inquiryList() {
    return this._get(`/2.0/quote/lists`);
  }

  getPrizes() {
    return this._get(`/2.0/quote/prizes`);
  }

  saveLicense(license) {
    return this._post(`/2.0/quote/license`, license);
  }

}