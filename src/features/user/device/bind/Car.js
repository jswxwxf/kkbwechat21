import React from 'react';
import { Component } from 'reflux';
import {
  Page,
  Navbar,
  List,
  ContentBlockTitle,
  ContentBlock,
  Button,
  GridRow,
  GridCol,
} from 'framework7-react';
import { observer } from 'mobx-react';

// import Header from 'features/welcome/Header';

import { CarSwitch, ModelField, ImageField, Breadcrumb } from 'shared/components';
// import { Pipe as P } from 'shared/utility';
// import { deviceActions } from 'shared/actions';
// import { DeviceStore } from 'shared/stores';

import './Car.scss';

@observer
export default class Car extends Component {

  render() {
    return (
      <Page id="user-device-bind-car">
        <Navbar title="设备激活" backLink="上一步" />
        <Breadcrumb step={2}>
          <ol>
            <li><span>激活设备</span></li>
            <li><span>选择车型</span></li>
            <li><span>插入设备</span></li>
          </ol>
        </Breadcrumb>
        <List form>
          <CarSwitch title="车牌" inner={false} />
          <ModelField />
        </List>
        <GridRow noGutter id="photo" className="lcb-white-bg">
          <ContentBlockTitle>拍照上传</ContentBlockTitle>
          <ContentBlock>
            请提供行驶证信息，这将有助于我们为您提供精准车险报价，并简化车险投保流程
          </ContentBlock>
          <GridRow>
            <GridCol>
              <img src={require('assets/images/license_front.png')} alt="正面" className="lcb-img-responsive" />
              <ImageField target=".col-auto" />
            </GridCol>
            <GridCol>
              <img src={require('assets/images/sample_license1.png')} alt="示例" className="lcb-img-responsive" />
            </GridCol>
          </GridRow>
        </GridRow>
        <ContentBlock>
          <Button fill big text="下一步" href="/user/device/bind/result" />
        </ContentBlock>
      </Page>
    );
  }
}
