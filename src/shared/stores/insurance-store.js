import { Store } from 'reflux';

import { insuranceActions } from 'shared/actions';
import { Dialogs } from 'shared/dialogs';

import InsuranceState from './insurance-state';

export default class InsuranceStore extends Store {

  static insuranceState = new InsuranceState();

  utilService;
  insuranceService;

  constructor() {
    super();
    this.listenables = insuranceActions;
  }

  async onGetEvalOptions() {
    this.utilService.showSpinner();
    let resp = await this.insuranceService.getEvalOptions();
    this.setState({
      evalOptions: resp.data.data
    });
  }

  async onQuickEval(params) {
    this.utilService.showSpinner();
    let resp = await this.insuranceService.quickEval(params);
    Dialogs.evalDialog.show(resp.data.data);
  }

}