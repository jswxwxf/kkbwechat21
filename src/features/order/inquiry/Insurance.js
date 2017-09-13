import React from 'react';
import { Component } from 'reflux';
import {
  Page,
  Navbar,
  List,
  ListItem,
  ContentBlock,
  Button,
  Toolbar,
} from 'framework7-react';
import { inject, observer } from 'mobx-react';

import { CompanyField, PackageField, RadioField } from 'shared/components';
// import { inquiryActions } from 'shared/actions';
import { InquiryStore } from 'shared/stores';

import InquiryForm from './InquiryForm';

import './Insurance.scss';

@inject('utilService')
@observer
export default class Insurance extends Component {

  utilService = this.props.utilService;

  form = new InquiryForm(); //  InquiryForm._instance;

  store = InquiryStore;
  storeKeys = ['companies'];
  state = {};

  render() {
    if (!this.form) {
      this.utilService.redirect('/order/inquiry/basic');
      return <Page />;
    }
    return (
      <Page id="insurance-inquiry-insurance">
        <Navbar title="选择保险" backLink="上一步" />
        <List>
          <ListItem title="选择保险公司" className="lcb-border-bottom" />
          <CompanyField companies={this.form.companies} />
        </List>
        <List>
          <RadioField color="red">
            <select>
              <option value="">直接按上一年险种投保</option>
            </select>
          </RadioField>
          <ListItem title="自定义险种组合" />
          <PackageField state={this.form.insuranceForm.$.package} />
        </List>
        <ContentBlock>
          如有任何问题，请拔打客服热线 <a href="tel:4009663899">400-966-3899</a>
        </ContentBlock>
        <Toolbar className="lcb-toolbar-button">
          <Button big fill color="red" text="立即报价" onClick={this.form.handleInsurance} />
        </Toolbar>
      </Page>
    );
  }
}
