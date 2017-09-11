import React, { Component } from 'react';
import {
  Page,
  Navbar,
  List,
  ContentBlock,
  Button,
} from 'framework7-react';
import { observer } from 'mobx-react';

import { CountDown, InputField } from 'shared/components';

import './EditPhone.scss';

@observer
export class EditPhoneStep1 extends Component {

  render() {
    return (
      <Page id="user-profile-edit-phone">
        <Navbar title="修改手机号" backLink="返回" />
        <List form>
          <InputField label="手机号" placeholder="请输入手机号" />
          <InputField label="验证码" placeholder="请输入验证码"
            rightSlot={<CountDown />} />
        </List>
        <ContentBlock>
          <Button fill big text="下一步" className="lcb-larger-margin" href="/user/profile/edit/phone/done" />
        </ContentBlock>
      </Page>
    );
  }
}

@observer
export class EditPhoneDone extends Component {

  render() {
    return (
      <Page id="user-profile-edit-phone">
        <Navbar title="新手机号" backLink="上一步" />
        <List form>
          <InputField label="新手机号" placeholder="请输入手机号" />
          <InputField label="验证码" placeholder="请输入验证码"
            rightSlot={<CountDown />} />
        </List>
        <ContentBlock>
          <Button fill big text="确认修改" className="lcb-larger-margin" />
        </ContentBlock>
      </Page>
    );
  }
}
