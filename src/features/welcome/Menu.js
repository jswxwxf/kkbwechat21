import React from 'react';
import { Component } from 'reflux';
import {
  Panel,
  View,
  Pages,
  Page,
  List,
  ListItem,
  Button
} from 'framework7-react';
import { observer } from 'mobx-react';

import { UserStore } from 'shared/stores';

import './Menu.scss';

@observer
export default class Menu extends Component {

  render() {
    let { userState } = UserStore;
    return (<Panel left cover layout="dark" opened={false}>
      <View id="lcb-menu" className="view-left">
        <Pages>
          <Page noNavbar>
            <div className="lcb-user-container">
              {!userState.loggedIn && <div className="lcb-buttons">
                <Button fill big href="/signup" view="#main-view" closePanel color="gray">注册</Button>
                <Button fill big href="/login" view="#main-view" closePanel>登录</Button>
              </div>}
              {userState.loggedIn && <div className="lcb-user">
                <img src={userState.user.avatar || require('assets/images/ico_default_avatar.png')} alt="alt" />
                <span> {userState.user.name} </span>
              </div>}
            </div>
            <div className="text-center">
              <a href="tel:4009663899"><img src={`${require('assets/images/icon_hotline.png')}`} alt="contact" className="lcb-img-responsive lcb-hotline" /></a>
            </div>
            <List>
              <ListItem link="/welcome" media={`<img src="${require('assets/images/icon_home.png')}">`} title="首页" linkView="#main-view" linkClosePanel></ListItem>
              <ListItem link="/insurance/product" media={`<img src="${require('assets/images/icon_product.png')}">`} title="产品中心" linkView="#main-view" linkClosePanel></ListItem>
              <ListItem link="/form/" media={`<img src="${require('assets/images/icon_travel.png')}">`} title="驾驶评分" linkView="#main-view" linkClosePanel></ListItem>
              <ListItem link="/form/" media={`<img src="${require('assets/images/icon_reward.png')}">`} title="我的钱包" linkView="#main-view" linkClosePanel></ListItem>
              <ListItem link="/user/home" media={`<img src="${require('assets/images/icon_user.png')}">`} title="用户中心" linkView="#main-view" linkClosePanel></ListItem>
              <ListItem link="/form/" media={`<img src="${require('assets/images/icon_order.png')}">`} title="我的订单" linkView="#main-view" linkClosePanel></ListItem>
              <ListItem link="/user/about" media={`<img src="${require('assets/images/icon_about.png')}">`} title="关于开开保" linkView="#main-view" linkClosePanel></ListItem>
            </List>
          </Page>
        </Pages>
      </View>
    </Panel>);
  }

}