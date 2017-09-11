import React from 'react';
import { Component } from 'reflux';
import {
  Page,
  List,
  ListItem,
  ContentBlock,
  Link,
  GridRow,
  GridCol,
  Card,
  CardContent,
  CardFooter,
  Toolbar,
  Button
} from 'framework7-react';
import { observer } from 'mobx-react';

import Header from 'features/welcome/Header';

import { CarSwitch } from 'shared/components';
import { Pipe as P } from 'shared/utility';
import { deviceActions } from 'shared/actions';
import { DeviceStore } from 'shared/stores';

import './Device.scss';

@observer
export default class Device extends Component {

  constructor(props, context) {
    super(props, context);
    deviceActions.getActiveDevice();
  }

  handleChange = (car_id) => {
    deviceActions.getActiveDevice();
  }

  renderBinder() {
    return (
      <span className="text-center">
        <ContentBlock>
          关于设备指示灯闪烁对应的状态，<br />请查看<Link text="《指示灯说明》"  />
        </ContentBlock>
        <ContentBlock className="device-circle-text">
          <div> <img src={require('assets/images/ico_obd.png')} alt="设备绑定" /> </div>
        </ContentBlock>
        <ContentBlock>
          您还没有绑定设备<br />如您已购买设备请绑定
        </ContentBlock>
      </span>
    )
  }

  renderDevice() {
    let { activeDevice } = DeviceStore.deviceState;
    return (
      <span>
        <List>
          <ListItem title="绑定车辆" after={activeDevice.car_bind} />
          <ListItem title="设备类型" after={activeDevice.device_type} />
          <ListItem title="设备编号" after={activeDevice.imei} />
          <ListItem title="当前状态" innerSlot={P(activeDevice.status).deviceStatus({ className: 'item-after' }).v} />
          <ListItem title="绑定时间" after={activeDevice.activated_at} />
          <ListItem title="最后连接时间" after={activeDevice.updated_at} />
        </List>
        <ContentBlock className="text-center">
          <Link text="《指示灯说明》" className="lcb-bigger-font" />
          <GridRow noGutter>
            <GridCol>
              <Link href="/user/car/status">
                <Card>
                  <CardContent>
                    <img src={require('assets/images/icon_car_large.png')} alt="车辆检测" className="lcb-img-responsive" />
                  </CardContent>
                  <CardFooter>车辆检测</CardFooter>
                </Card>
              </Link>
            </GridCol>
            <GridCol>
              <Link href="/user/car/safety">
                <Card>
                  <CardContent><img src={require('assets/images/icon_set.png')} alt="安防设置" className="lcb-img-responsive" /></CardContent>
                  <CardFooter>安防设置</CardFooter>
                </Card>
              </Link>
            </GridCol>
          </GridRow>
        </ContentBlock>
      </span>
    );
  }

  render() {
    let { activeDevice } = DeviceStore.deviceState;
    return (
      <Page id="user-device" fixedSlot={
        <Header title="设备信息" rightSlot={
          <CarSwitch title="选择车辆" type="link" onChange={this.handleChange} />
        } />
      }>
        {!activeDevice && this.renderBinder()}
        {activeDevice && this.renderDevice()}
        {!activeDevice && <Toolbar className="lcb-toolbar-button">
          <Button href="/user/device/bind" big fill text="绑定设备" />
        </Toolbar>}
      </Page>
    );
  }
}
