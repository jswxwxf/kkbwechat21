import React from 'react';
import { observable, action } from 'mobx';

import Dialogs from './Dialogs';
import Result from 'features/insurance/eval/Result';

export default class EvalDialog {

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