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

import './EditName.scss';

@observer
export default class EditName extends Component {

  render() {
    // let { user } = UserStore.userState;
    return (
      <Page id="user-profile-edit-name">
        <Navbar title="完善姓名" backLink="返回" />
        <List form>
          <InputField label="姓名" placeholder="请输入姓名" />
        </List>
        <ContentBlock className="text-center lcb-font-note lcb-normal-font lcb-margin-top">
          姓名只能修改一次
          </ContentBlock>
        <ContentBlock>
          <Button fill big text="确定" className="lcb-larger-margin" />
        </ContentBlock>
      </Page>
    );
  }
}
