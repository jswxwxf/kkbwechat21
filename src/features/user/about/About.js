import React, { Component } from 'react';
import {
  Page,
  ContentBlock,
  List,
  ListItem,
  Link
} from 'framework7-react';

import Header from 'features/welcome/Header';

import './About.scss';

export default class Home extends Component {

  render() {
    return (
      <Page id="user-about" fixedSlot={<Header title="关于我们" />}>
        <List>
          <ListItem link="/about/" title="常见问题"></ListItem>
          <ListItem link="/about/" title="意见反馈"></ListItem>
          <ListItem link="/about/" title="联系我们"></ListItem>
        </List>
        <ContentBlock id="stores" className="text-center">
          <Link><img src={`${require('assets/images/apple_store.png')}`} alt="alt" className="lcb-img-responsive" /></Link>
          <Link><img src={`${require('assets/images/android_market.png')}`} alt="alt" className="lcb-img-responsive" /></Link>
        </ContentBlock>
      </Page>
    );
  }
}
