import React from 'react';
import { Component } from 'reflux';
import {
  Page,
  Navbar,
  ContentBlock,
  Button
} from 'framework7-react';
import { observer } from 'mobx-react';

// import Header from 'features/welcome/Header';

import { Breadcrumb } from 'shared/components';
// import { Pipe as P } from 'shared/utility';
// import { deviceActions } from 'shared/actions';
// import { DeviceStore } from 'shared/stores';

import './Result.scss';

@observer
export default class Result extends Component {

  render() {
    return (
      <Page id="user-device-bind-result">
        <Navbar title="设备激活" backLink="上一步" />
        <Breadcrumb step={3}>
          <ol>
            <li><span>激活设备</span></li>
            <li><span>选择车型</span></li>
            <li><span>插入设备</span></li>
          </ol>
        </Breadcrumb>
        <img src={require('assets/images/picture_connect.png')} alt="插入设备" className="lcb-img-responsive" />
        <ContentBlock>
          <Button fill big text="完成" />
        </ContentBlock>
      </Page>
    );
  }
}
