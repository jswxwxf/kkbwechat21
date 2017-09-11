import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Page,
  Swiper,
  SwiperSlide,
  GridRow,
  GridCol,
  List,
  ListItem,
  Button,
  Link
} from 'framework7-react';

import Header from './Header';
import './Welcome.scss';

export default class Welcome extends Component {

  static contextTypes = {
    framework7AppContext: PropTypes.object
  };

  theme = this.context.framework7AppContext.theme;

  renderSlides() {
    return (
      <Swiper pagination params={{ autoplay: 5000 }}>
        <SwiperSlide><img src={`${require('assets/images/banner_hunt.png')}`} alt="ad1" className="lcb-img-responsive" /></SwiperSlide>
        <SwiperSlide><img src={`${require('assets/images/banner_delay.png')}`} alt="ad2" className="lcb-img-responsive" /></SwiperSlide>
        <SwiperSlide><img src={`${require('assets/images/banner01.png')}`} alt="ad3" className="lcb-img-responsive" /></SwiperSlide>
        <SwiperSlide><img src={`${require('assets/images/banner_talk.png')}`} alt="ad4" className="lcb-img-responsive" /></SwiperSlide>
      </Swiper>
    );
  }

  renderActions() {
    return (
      <GridRow id="actions" className="lcb-white-bg text-center">
        <GridCol>
          <Link href="/insurance/eval">
            <img src={`${require('assets/images/ico_pre_eval.png')}`} alt="alt" /><br/>
            <span>保费试算</span>
          </Link>
        </GridCol>
        <GridCol>
          <Link href="/order/inquiry/basic">
            <img src={`${require('assets/images/ico_inquiry.png')}`} alt="alt" /><br/>
            <span>车险报价</span>
          </Link>
        </GridCol>
        <GridCol>
          <img src={`${require('assets/images/ico_drive_rating.png')}`} alt="alt" /><br/>
          <span>驾驶评级</span>
        </GridCol>
        <GridCol>
          <img src={`${require('assets/images/ico_activities.png')}`} alt="alt" /><br/>
          <span>活动专区</span>
        </GridCol>
      </GridRow>
    )
  }

  renderInsurances() {
    return (
      <List id="insureance" mediaList>
        <ListItem title="优选车险 <sup>最高省40%</sup>" media={`<img src="${require('assets/images/ico_hunt_driver.png')}">`} text="寻找好车主，保费直降"
          innerSlot={<Button fill color="red">模拟评测</Button>}></ListItem>
        <ListItem title="绿色车险 <sup>最高省40%</sup>" media={`<img src="${require('assets/images/kkb15.png')}">`} text="天天现金奖励，持续三个月" />
        <ListItem title="智能盒子激活快速通道" media={`<img src="${require('assets/images/device.png')}">`} text="收到盒子了吗？赶紧激活吧！" />
      </List>

    )
  }

  render() {
    return (
      <Page id="welcome" fixedSlot={<Header title="开开保" />}>
        {this.renderSlides()}
        {this.renderActions()}
        {this.renderInsurances()}
      </Page >
    );
  }
}
