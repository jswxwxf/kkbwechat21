import React from 'react';
import { Component } from 'reflux';
import {
  Page,
  Navbar,
  List,
  ContentBlock,
  Button
} from 'framework7-react';
import { observer } from 'mobx-react';

// import Header from 'features/welcome/Header';

import { InputField, Breadcrumb } from 'shared/components';
// import { Pipe as P } from 'shared/utility';
// import { deviceActions } from 'shared/actions';
// import { DeviceStore } from 'shared/stores';

import './Device.scss';

@observer
export default class Device extends Component {

  render() {
    return (
      <Page id="user-device-bind-device">
        <Navbar title="设备激活" backLink="返回" />
        <Breadcrumb>
          <ol>
            <li><span>激活设备</span></li>
            <li><span>选择车型</span></li>
            <li><span>插入设备</span></li>
          </ol>
        </Breadcrumb>
        <List form>
          <InputField label="IMEI：" placeholder="请输入IMEI" />
          <InputField label="CODE：" placeholder="请输入CODE" />
        </List>
        <ContentBlock>
          <Button fill big text="下一步" href="/user/device/bind/car" />
        </ContentBlock>
      </Page>
    );
  }
}
