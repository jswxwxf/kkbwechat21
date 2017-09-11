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

import { InputField } from 'shared/components';

import { UserStore } from 'shared/stores';

import './EditUsername.scss';

@observer
export default class EditUsername extends Component {

  render() {
    let { user } = UserStore.userState;
    return (
      <Page id="user-profile-edit-username">
        <Navbar title="修改用户名" backLink="返回" />
        <List form>
          <InputField label="用户名" placeholder="请输入用户名" />
        </List>
        <div className="text-center lcb-bigger-font">您的手机帐号： {user && user.mobile}</div>
        <ContentBlock className="text-center lcb-font-note lcb-normal-font lcb-margin-top">
          用户名只能修改一次，设置用户名时必须包含字母和数字，以字母开头，字母不区分大小写，长度为4
          </ContentBlock>
        <ContentBlock>
          <Button fill big text="确定" className="lcb-larger-margin" />
        </ContentBlock>
      </Page>
    );
  }
}
