import React, { Component } from 'react';
import $ from 'jquery';

require('./toast.min');

// eslint-disable-next-line
import './Toast.css';

export default class Toast extends Component {

  static _toast;

  static showToast(message) {
    if (!Toast._toast) return;
    let $toast = $(Toast._toast);
    $toast.find(".toast-body").text(message);
    $toast.toast();
  }

  render() {
    return (
      <div className="toast fade" tabIndex="-1" role="dialog" ref={r => Toast._toast = r}>
        <div className="toast-dialog" role="document">
          <div className="toast-content">
            <div className="toast-body">
            </div>
          </div>
        </div>
      </div>
    )
  }

}