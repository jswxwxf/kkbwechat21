import React from 'react';
import { Component } from 'reflux';
import {
  Page,
  List,
  ContentBlock,
  Button,
  Icon,
  Toolbar,
  ButtonsSegmented,
} from 'framework7-react';
import { inject, observer } from 'mobx-react';

import Header from 'features/welcome/Header';

import { CityField, InputField, RadioField } from 'shared/components';
import { inquiryActions } from 'shared/actions';
import { InquiryStore } from 'shared/stores';

import InquiryForm from './InquiryForm';

import './Basic.scss';

@inject('utilService')
@observer
export default class Basic extends Component {

  utilService = this.props.utilService;

  form = new InquiryForm();

  store = InquiryStore;
  storeKeys = ['productsForCity'];
  state = {};

  constructor(props, context) {
    super(props, context);
    inquiryActions.getProducts('310100');
  }

  handleCityChange = (city, oldCity) => {
    if (city === oldCity) return;
    inquiryActions.getProducts(city);
  }

  handleSubmit = async () => {
    if (!await this.form.handleBasic()) return;
    this.utilService.goto('/order/inquiry/more');
  }

  render() {
    let { productsForCity } = this.state;
    if (!productsForCity) return <Page />;
    if (productsForCity.products.length === 1) {
      this.form.productId.onChange(productsForCity.products[0].product_id);
    }
    return (
      <Page id="insurance-inquiry-basic" fixedSlot={<Header title="车险报价" />}>
        <List form>
          <CityField label="城　市" placeholder="请选择" state={this.form.city} onClose={this.handleCityChange} />
          <InputField label="车牌号" placeholder="请填写车牌号" state={this.form.licenseNo} />
          <InputField label="姓　名" placeholder="请填写姓名" state={this.form.name} />
          <InputField label="身份证" placeholder="请填写身份证" state={this.form.idCard} />
        </List>
        <RadioField label="请选择车险产品" color="red" state={this.form.productId}>
          <select>
            {productsForCity.products.map(product => <option key={product.product_id} value={product.product_id}>{product.product}</option>)}
          </select>
        </RadioField>
        <ContentBlock id="hint">
          温馨提示<br />
          <Icon fa="caret-up" size="22px" color="red" /><span>交强险/车船税可提前{productsForCity.compulsory_forward}天投保</span><br />
          <Icon fa="caret-up" size="22px" color="red" /><span>商业险可提前{productsForCity.commercial_forward}天投保</span><br />
          如有任何问题，请拔打客服热线 <a href="tel:4009663899">400-966-3899</a>
        </ContentBlock>
        <Toolbar className="lcb-toolbar-button">
          <ButtonsSegmented>
            <Button big color="red" text="历史报价" />
            <Button big fill color="red" text="新建报价" onClick={this.handleSubmit} />
          </ButtonsSegmented>
        </Toolbar>
      </Page>
    );
  }
}
