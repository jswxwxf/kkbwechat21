import React, { Component } from 'react';
import {
  Page,
  Navbar,
  ContentBlock,
} from 'framework7-react';
import { observer } from 'mobx-react';

import './Status.scss';

@observer
export default class Status extends Component {

  render() {
    return (
      <Page id="user-car-status">
        <Navbar title="车辆检测" backLink="返回" />
        <ContentBlock>开开保会定期对您的车辆进行综合体检，本页只显示存在风险的部件，如果有风险部件列出，建议您咨询维修机构！</ContentBlock>
      </Page >
    );
  }

}
