import React, { Component } from 'react';
import {
  Page,
  Navbar,
  Toolbar,
  Link,
  Tabs,
  Tab,
} from 'framework7-react';
import { observer } from 'mobx-react';

import { userActions } from 'shared/actions';

import './Detail.scss';

@observer
export default class Detail extends Component {

  componentDidMount() {
    userActions.getProfile(false);
  }

  render() {
    return (
      <Page id="user-detail">
        <Navbar title="补充信息" backLink="返回" />
        <Toolbar tabbar labels>
          <Link icon="lcb-icon-home" text="家庭" routeTabLink="#tab-home" href="/user/detail/home" />
          <Link icon="lcb-icon-drive" text="驾龄" routeTabLink="#tab-drive" href="/user/detail/drive" />
          <Link icon="lcb-icon-credit" text="信用" routeTabLink="#tab-credit" href="/user/detail/credit" />
          <Link icon="lcb-icon-jobedu" text="工作教育" routeTabLink="#tab-jobedu" href="/user/detail/jobedu" />
          <Link icon="lcb-icon-social" text="社交" routeTabLink="#tab-social" href="/user/detail/social" />
        </Toolbar>
        <Tabs>
          <Tab id="tab-home" />
          <Tab id="tab-drive" />
          <Tab id="tab-credit" />
          <Tab id="tab-jobedu" />
          <Tab id="tab-social" />
        </Tabs>
      </Page>
    );
  }

}
