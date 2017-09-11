import React from 'react';
import { Component } from 'reflux';
import {
  Page,
  List,
  ListItem,
} from 'framework7-react';
import { observer } from 'mobx-react';

import Header from 'features/welcome/Header';

import { ImageField } from 'shared/components';
import { Pipe as P } from 'shared/utility';
import { userActions } from 'shared/actions';
import { UserStore } from 'shared/stores';

import './Profile.scss';

@observer
export default class Profile extends Component {

  componentDidMount() {
    userActions.getProfile();
  }

  handleAvatar = (avatar) => {
    userActions.updateAvatar({
      avatar: avatar.data
    });
  }

  render() {
    let { user } = UserStore.userState;
    if (!user) return <Page />;
    /* eslint-disable */
    return (
      <Page id="user-profile" fixedSlot={<Header title="帐户信息" />}>
        <List>
          <ListItem link="javascript:void(0);" title="头像"><img src={user.avatar} alt="头像" className="lcb-img-responsive lcb-avatar" /><ImageField onDone={this.handleAvatar} /></ListItem>
          <ListItem divider />
          <ListItem link="/user/profile/edit/username" title="用户名" after={user.name} />
          <ListItem link="/user/profile/edit/password" title="修改登录密码" after="点击修改密码" />
          <ListItem divider title="基础资料" />
          <ListItem link="/user/profile/edit/id" title="身份证" after={P(user.id_card).protect().v} />
          <ListItem link="/user/profile/edit/name" title="姓名" after={user.realname} />
          <ListItem link="/user/detail/home" title="补充信息" />
          <ListItem divider title="绑定设置" />
          <ListItem link="/user/profile/edit/phone" media={`<img src="${require('assets/images/ico_phone.png')}" class="lcb-icon">`} title="手机" after="已绑定" />
          <ListItem media={`<img src="${require('assets/images/ico_wechat.png')}" class="lcb-icon">`} title="微信" after={P(user.accounts[3]).bindStatus().v} />
          <ListItem media={`<img src="${require('assets/images/ico_weibo.png')}" class="lcb-icon">`} title="新浪微博" after={P(user.accounts[1]).bindStatus().v} />
          <ListItem media={`<img src="${require('assets/images/ico_qq.png')}" class="lcb-icon">`} title="QQ" after={P(user.accounts[2]).bindStatus().v} />
        </List>
      </Page>
    );
  }
}
