import React, { Component } from 'react';
import {
  Page,
  List,
  ContentBlock,
  Button,
  Link
} from 'framework7-react';
import { observer } from 'mobx-react';

import { CountDown, InputField } from 'shared/components';
import Header from 'features/welcome/Header';

import SignupForm from './SignupForm';
import './Signup.scss';

@observer
export default class Signup extends Component {

  form = new SignupForm();

  render() {
    return (
      <Page id="login" fixedSlot={<Header title="注册" />}>
        <List form>
          <InputField label="手机" placeholder="请输入注册手机" state={this.form.mobile} />
          <InputField label="验证码" placeholder="请输入验证码" state={this.form.code}
            rightSlot={<CountDown onPress={(e, self) => this.form.sendCode(e, self)} />} />
          <InputField label="密　码" placeholder="请输入密码" type="password" state={this.form.password} />
        </List>
        <ContentBlock className="text-center lcb-font-note lcb-smaller-font">密码只能使用字母和数字，长度为6-20位，字母区分大小写</ContentBlock>
        <ContentBlock>
          <Button fill big text="确定" className="lcb-larger-margin" onClick={this.form.handleSubmit} />
        </ContentBlock>
        <ContentBlock>
          注册代表你已经阅读并同意<Link className="balanced lcb-link-button lcb-normal-font">《用户服务协议》</Link>和<Link className="balanced lcb-link-button lcb-normal-font">《隐私条款》</Link>
        </ContentBlock>
      </Page>
    );
  }
}
