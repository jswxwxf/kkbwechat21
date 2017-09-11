import React, { Component } from 'react';
import {
  List,
  ListItem
} from 'framework7-react';
import { observer } from 'mobx-react';

import { Pipe as P } from 'shared/utility';
import { UserStore } from 'shared/stores';

import './Social.scss';

@observer
export default class Social extends Component {

  render() {
    let { user } = UserStore.userState;
    if (!user) return;
    return (
      <span id="user-detail-social">
        <List>
          <ListItem media={`<img src="${require('assets/images/ico_wechat.png')}" class="lcb-icon">`} title="微信" after={P(user.accounts[3]).bindStatus().v} />
          <ListItem media={`<img src="${require('assets/images/ico_weibo.png')}" class="lcb-icon">`} title="新浪微博" after={P(user.accounts[1]).bindStatus().v} />
          <ListItem media={`<img src="${require('assets/images/ico_qq.png')}" class="lcb-icon">`} title="QQ" after={P(user.accounts[2]).bindStatus().v} />
        </List>
      </span>
    );
  }
}
