import React from 'react';
import { Component } from 'reflux';
import {
  Page,
  List,
  ContentBlock,
  Button,
} from 'framework7-react';
import { observer } from 'mobx-react';

import { CountDown, InputField } from 'shared/components';
import Header from 'features/welcome/Header';

import ForgetForm from './ForgetForm';
import './Forget.scss';

@observer
export default class Forget extends Component {

  form = new ForgetForm();

  render() {
    return (
      <Page id="login" fixedSlot={<Header title="重置密码" />}>
        <List form>
          <InputField label="手机号" placeholder="请输入注册手机" state={this.form.mobile} />
          <InputField label="验证码" placeholder="请输入验证码" state={this.form.code}
            rightSlot={<CountDown onPress={(e, self) => this.form.sendCode(e, self)} />} />
          <InputField label="密　码" placeholder="请设置新的帐户密码" type="password" state={this.form.password} />
        </List>
        <ContentBlock>
          <Button fill big text="确定" className="lcb-larger-margin" onClick={this.form.handleSubmit} />
        </ContentBlock>
      </Page>
    );
  }
}
