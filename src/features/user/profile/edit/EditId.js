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

import './EditId.scss';

@observer
export default class EditId extends Component {

  render() {
    // let { user } = UserStore.userState;
    return (
      <Page id="user-profile-edit-id">
        <Navbar title="修改身份证" backLink="返回" />
        <List form>
          <InputField label="身份证号" placeholder="请输入身份证号" />
        </List>
        <ContentBlock className="text-center lcb-font-note lcb-normal-font lcb-margin-top">
          身份证只能修改一次
          </ContentBlock>
        <ContentBlock>
          <Button fill big text="确定" className="lcb-larger-margin" />
        </ContentBlock>
      </Page>
    );
  }
}
