import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import Result from 'features/insurance/eval/Result';

class EvalDialog {
  @observable _show = false;
  @observable _evalResult = null;
  @action show(evalResult) {
    Dialogs._show = true;
    this._show = true;
    this._evalResult = evalResult;
    setTimeout(() => Dialogs.popup('insurance-eval-result'), 0);
  }
  @action hide() {
    this._show = false
  }
  render() {
    return (
      <Result id="insurance-eval-result" result={this._evalResult} />
    );
  }
}

@observer
export default class Dialogs extends Component {

  @observable static _show = false;

  @action static hideAll() {
    Dialogs._show = false;
  }

  static popup(popupId) {
    window.f7App.hideIndicator();
    window.f7App.hidePreloader();
    window.f7App.popup(`#${popupId}`);
  }

  static evalDialog = new EvalDialog();

  render() {
    return (
      <div id="popups">
        {Dialogs._show && Dialogs.evalDialog._show && Dialogs.evalDialog.render()}
      </div>
    );
  }
}
