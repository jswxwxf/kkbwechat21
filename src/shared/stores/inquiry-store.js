import { Store } from 'reflux';

import { inquiryActions } from 'shared/actions';

import InquiryState from './inquiry-state';

export default class InsuranceStore extends Store {

  static inquiryState = new InquiryState();

  utilService;
  inquiryService;

  constructor() {
    super();
    this.listenables = inquiryActions;
  }

  async onGetProducts(city_id) {
    this.utilService.showSpinner();
    const resp = await this.inquiryService.getProducts(city_id);
    this.setState({
      productsForCity: resp.data.data
    });
  }

}