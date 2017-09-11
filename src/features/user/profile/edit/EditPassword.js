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

// import { UserStore } from 'shared/stores';

import './EditPassword.scss';

@observer
export default class EditPassword extends Component {

  render() {
    // let { user } = UserStore.userState;
    return (
      <Page id="user-profile-edit-username">
        <Navbar title="修改登录密码" backLink="返回" />
        <List form>
          <InputField label="旧密码" placeholder="请输入旧密码" type="password" />
          <InputField label="新密码" placeholder="请输入新密码" type="password" />
          <InputField label="重复新密码" placeholder="请再次输入密码" type="password" />
        </List>
        <ContentBlock className="text-center lcb-font-note lcb-normal-font lcb-margin-top">
          密码只能使用字母和数字，长度为6-20位，字母区分大小写
        </ContentBlock>
        <ContentBlock>
          <Button fill big text="确定" className="lcb-larger-margin" />
        </ContentBlock>
      </Page>
    );
  }
}
