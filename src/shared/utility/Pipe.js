import React from 'react';
import classnames from 'classnames';

import { CommonService } from 'shared/services';

import { Validators } from './';

class Pipe {

  commonService = CommonService._instance;

  _value;

  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  get v() {
    return this._value;
  }

  protect() {
    if (Validators.isIdCard(this._value)) {
      this._value = this._value.replace(/.{4}$/, '****');
      return this;
    }
    if (Validators.isMobile(this._value)) {
      this._value = this._value.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
      return this;
    }
    return this;
  }

  bindStatus() {
    if (this._value) {
      this._value = "已绑定";
    } else {
      this._value = "未绑定"
    }
    return this;
  }

  deviceStatus(options = {}) {
    // eslint-disable-next-line
    if (this._value == 1) {
      this._value = <span className={classnames(options.className, "lcb-status-normal")}>正常</span>;
    } else {
      this._value = <span className={classnames(options.className, "lcb-status-error")}>异常</span>;
    }
    return this;
  }

  oilType() {
    let found = this.commonService.getOils().find(oil => oil.oil_id === this._value)
    if (!found) return this;
    this._value = [found.oil_type, found.name_cn].join('');
    return this;
  }

}

export default function P(value) {
  return new Pipe(value);
}