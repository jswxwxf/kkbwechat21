import React from 'react';
import { Component } from 'reflux';
import {
  Page,
  List,
  ContentBlock,
  Button,
  Link
} from 'framework7-react';
import { observer } from 'mobx-react';

import { InputField } from 'shared/components';
import Header from 'features/welcome/Header';
import { UserStore } from 'shared/stores';

import LoginForm from './LoginForm';
import './Login.scss';

@observer
export default class Login extends Component {
  
  stores = [UserStore];
  
  form = new LoginForm();

  render() {
    return (
      <Page id="login" fixedSlot={<Header title="登录" />}>
        <List form>
          <InputField label="手机" placeholder="请输入用户名或注册手机" state={this.form.name} />
          <InputField label="密码" placeholder="请输入密码" type="password" state={this.form.password} />
        </List>
        <ContentBlock id="actions">
          <Link href="/signup" text="注册" />
          <Link href="/forget" text="忘记密码？" />
        </ContentBlock>
        <ContentBlock>
          <Button fill big text="确定" className="lcb-larger-margin" onClick={this.form.handleSubmit} />
        </ContentBlock>
      </Page>
    );
  }
}
