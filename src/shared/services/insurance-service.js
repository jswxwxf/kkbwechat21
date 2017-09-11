import BaseService from './base-service';

export default class InsuranceService extends BaseService {

  inquiryLcb15(lcb) {
    return this._post('/2.0/lcb15/quoted', lcb);
  }

  getLcb15Inquiries() {
    return this._get('/2.0/lcb15/quoted');
  }

  getLcb15Inquiry(order_id) {
    return this._get(`/2.0/lcb15/quoted/${order_id}`);
  }

  updateLcb15Inquiry(inquiry) {
    return this._put('/2.0/lcb15/quoted', inquiry);
  }

  getTotalCompensate() {
    return this._get('/2.0/entrapments/total');
  }

  sendCompensateCode(mobile) {
    return this._post('/2.0/send/entrapments', { mobile: mobile });
  }

  applyCompensate(compensate) {
    return this._post('/2.0/entrapments', compensate);
  }

  activeCompensate() {
    return this._post('/2.0/active/entrapments', {});
  }

  getCompensate() {
    return this._get('/2.0/entrapments');
  }

  claimCompensate(compensate) {
    return this._post('/2.0/claim/entrapments', compensate);
  }

  getCompensate2Products() {
    return this._get('/2.0/payedentrap/products');
  }

  sendCompensate2Code(mobile) {
    return this._post('/2.0/send/payedentrap', { mobile: mobile });
  }

  getCompensate2(order_id) {
    return this._get(`/2.0/payedentrap/${order_id}`);
  }

  claimCompensate2(order_id, compensate) {
    return this._post(`/2.0/payedentrap/${order_id}/claim`, compensate);
  }

  sendStolenCode(mobile) {
    return this._post('/2.0/send/stolen', { mobile: mobile });
  }

  applyStolen(stolen) {
    return this._post('/2.0/stolen', stolen);
  }

  activeStolen(ukey) {
    return this._post('/2.0/stolen/forward', { ukey: ukey });
  }

  getStolen(order_id) {
    return this._get(`/2.0/stolen/${order_id}`);
  }

  getEvalOptions() {
    return this._get('/2.0/quoted/options');
  }

  quickEval(params) {
    return this._post('/2.0/quoted/quick', params);
  }

  yobeeQuoteBasic(data) {
    return this._post('/2.0/lcb15/quoted2/basic', data);
  }

  yobeeQuoteMore(data) {
    return this._post('/2.0/lcb15/quoted2/more', data);
  }

  yobeeQuoteResult(data) {
    return this._post('/2.0/lcb15/quoted2/result', data);
  }

  axaQuoteBasic(data) {
    return this._post('/2.0/quote/axa/basic', data);
  }

  axaQuoteMore(data) {
    return this._post('/2.0/quote/axa/more', data);
  }

  axaQuoteResult(data) {
    return this._post('/2.0/quote/axa/result', data);
  }

}