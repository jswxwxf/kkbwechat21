import React from 'react';
import { Component } from 'reflux';
import {
  Page,
  Navbar,
  List,
  ContentBlock,
  ContentBlockTitle,
  Button,
  Toolbar,
  GridRow,
  GridCol,
  Link,
} from 'framework7-react';
import { inject, observer } from 'mobx-react';

import { InputField } from 'shared/components';
// import { inquiryActions } from 'shared/actions';
import { InquiryStore } from 'shared/stores';

import InquiryForm from './InquiryForm';

import './More.scss';

@inject('utilService')
@observer
export default class More extends Component {

  utilService = this.props.utilService;

  form = InquiryForm._instance;

  store = InquiryStore;
  storeKeys = ['productsForCity'];
  state = {};

  render() {
    if (!this.form) {
      this.utilService.redirect('/order/inquiry/basic');
      return <Page/>;
    }
    return (
      <Page id="insurance-inquiry-more">
        <Navbar title="补充信息" backLink="上一步" />
        <ContentBlockTitle>提供行驶证信息可以获取更精准的车险报价。</ContentBlockTitle>
        <h2>上传行驶证照片</h2>
        <GridRow id="photos" className="lcb-white-bg padding lcb-border-vertical">
          <GridCol>
            <img src={`${require('assets/images/license_front.png')}`} alt="上传行驶证正面" className="lcb-img-responsive" />
          </GridCol>
          <GridCol>
            <img src={`${require('assets/images/license_second.png')}`} alt="上传行驶证背面" className="lcb-img-responsive" />
          </GridCol>
        </GridRow>
        <h2 className="lcb-strike-through"><span>或者</span></h2>
        <Link icon="lcb-icon-hint" text="填写说明" className="pull-right more-padding-right lcb-bigger-font2" />
        <h2>直接手动填写信息</h2>
        <List form>
          <InputField label="品牌型号" placeholder="请填写品牌型号" media="<i class='fa fa-circle color-red' />" />
          <InputField label="车辆识别代码" placeholder="请填写车辆识别代码" media="<i class='fa fa-circle color-purple' />" />
          <InputField label="发动机号码" placeholder="请填写发动机号码" media="<i class='fa fa-circle color-lightblue' />" />
          <InputField label="注册日期" placeholder="请选择日期" type="date" media="<i class='fa fa-circle color-amber' />" />
          <InputField label="发证日期（过户车）" placeholder="请选择日期" type="date" media="<i class='fa fa-circle color-green' />" />
        </List>
        <ContentBlock>
          如有任何问题，请拔打客服热线 <a href="tel:4009663899">400-966-3899</a>
        </ContentBlock>
        <Toolbar className="lcb-toolbar-button">
          <Button big fill color="red" text="确认信息" onClick={this.form.handleMore} />
        </Toolbar>
      </Page>
    );
  }
}
