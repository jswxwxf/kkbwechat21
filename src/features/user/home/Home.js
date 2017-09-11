import React from 'react';
import { Component } from 'reflux';
import {
  Page,
  ContentBlock,
  List,
  ListItem,
  ListButton,
  Button
} from 'framework7-react';
import { observer } from 'mobx-react';

import Header from 'features/welcome/Header';

import { userActions, deviceActions } from 'shared/actions';
import { UserStore } from 'shared/stores';

import './Home.scss';

@observer
export default class Home extends Component {

  constructor(props, context) {
    super(props, context);
    userActions.getProfile();
    deviceActions.getActiveDevice();
  }

  render() {
    let { user } = UserStore.userState;
    if (!user) return <Page />
    return (
      <Page id="user-home" fixedSlot={<Header title="用户中心" />}>
        <ContentBlock id="avatar" className="text-center bg-blue">
          <img src={user.avatar} alt="头像" />
          <div> {user.name} </div>
          <Button color="white" round><img src={require('assets/images/shop/icon_checkin.png')} alt="alt" className="lcb-icon" />签到</Button>
        </ContentBlock>
        <List>
          <ListItem link="/user/profile" media={`<img src="${require('assets/images/ico_account.png')}" class="lcb-icon">`} title="帐户信息"></ListItem>
          <ListItem link="/contacts/" media={`<img src="${require('assets/images/ico_wallet.png')}" class="lcb-icon">`} title="我的钱包"></ListItem>
          <ListItem divider />
          <ListItem link="/user/device" media={`<img src="${require('assets/images/ico_device.png')}" class="lcb-icon">`} title="设备信息"></ListItem>
          <ListItem link="/user/car" media={`<img src="${require('assets/images/icon_car.png')}" class="lcb-icon">`} title="车辆信息"></ListItem>
          <ListItem divider />
          <ListItem link="/about/" media={`<img src="${require('assets/images/ico_policy.png')}" class="lcb-icon">`} title="我的订单"></ListItem>
          <ListItem divider />
          <ListItem link="/contacts/" media={`<img src="${require('assets/images/ico_about.png')}" class="lcb-icon">`} title="关于我们"></ListItem>
          <ListItem divider />
          <ListButton onClick={() => userActions.logout()}>注销</ListButton>
        </List>
      </Page>
    );
  }
}
