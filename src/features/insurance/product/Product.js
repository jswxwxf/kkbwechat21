import React, { Component } from 'react';
import {
  Page,
  ContentBlock,
  ContentBlockTitle
} from 'framework7-react';

import Header from 'features/welcome/Header';

import './Product.scss';

export default class Product extends Component {

  render() {
    return (
      <Page id="insurance-product" className="lcb-white-bg" fixedSlot={<Header title="产品中心" />}>
        <ContentBlock><img src={`${require('assets/images/banner_hunt.png')}`} alt="alt" className="lcb-img-responsive" /></ContentBlock>
        <ContentBlockTitle>
          <h3>优选车险</h3>
          <span>寻找好车主，保费直降</span>
        </ContentBlockTitle>
        <ContentBlock><img src={`${require('assets/images/banner01.png')}`} alt="alt" className="lcb-img-responsive" /></ContentBlock>
        <ContentBlockTitle>
          <h3>绿色车险</h3>
          <span>天天现金奖励，持续三个月</span>
        </ContentBlockTitle>
        <ContentBlock><img src={`${require('assets/images/banner02.png')}`} alt="alt" className="lcb-img-responsive" /></ContentBlock>
        <ContentBlockTitle>
          <h3>车险报价</h3>
          <span>带给你不一样的抵价冲击</span>
        </ContentBlockTitle>
        <ContentBlock><img src={`${require('assets/images/comingsoon.png')}`} alt="alt" className="lcb-img-responsive" /></ContentBlock>
        <ContentBlockTitle>
          <h3>敬请期待</h3>
          <span>更多活动，敬请期待</span>
        </ContentBlockTitle>
      </Page>
    );
  }
}
