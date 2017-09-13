import { Store } from 'reflux';

import InquiryForm from 'features/order/inquiry/InquiryForm';

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

  async onInquiryBasic(inquiry) {
    this.utilService.showSpinner();
    await this.inquiryService.inquiryBasic(inquiry);
    this.utilService.goto('/order/inquiry/more');
  }

  async onInquiryMore(inquiry) {
    this.utilService.showSpinner();
    const resp = await this.inquiryService.inquiryMore(inquiry);
    if (InquiryForm._instance) {
      InquiryForm._instance.companies = resp.data.data;
    }
    this.utilService.goto('/order/inquiry/insurance');
  }

}