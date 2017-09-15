import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import EvalDialog from './EvalDialog';

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
