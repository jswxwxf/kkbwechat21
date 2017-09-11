import React from 'react';
import { Component } from 'reflux';
import {
  Page,
  List,
  ListItem,
  ContentBlock,
  ContentBlockTitle,
  Button,
  Icon,
  Toolbar,
  ButtonsSegmented,
} from 'framework7-react';

import Header from 'features/welcome/Header';

import { InputField, SelectField, Dialog } from 'shared/components';
import { insuranceActions } from 'shared/actions';
import { InsuranceStore } from 'shared/stores';

import './Basic.scss';

export default class Basic extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Page id="insurance-inquiry-basic" fixedSlot={<Header title="车险报价" />}>
        <List form>
          <ListItem link="#" title="城　市" after="请选择" />
          <ListItem link="#" title="车牌号" after="请选择" />
          <ListItem link="#" title="姓　名" after="请选择" />
          <ListItem link="#" title="身份证" after="请选择" />
        </List>
        <ContentBlockTitle>请选择车险产品</ContentBlockTitle>
        <List form>
          <ListItem checkbox name="惠选车险" value="1" title="惠选车险" checked />
          <ListItem checkbox name="优选车险" value="2" title="优选车险" />
        </List>
        <ContentBlock id="hint">
          温馨提示<br />
          <Icon fa="caret-up" size="22px" color="red" /> 交强险/车船税可提前天投保<br />
          <Icon fa="caret-up" size="22px" color="red" /> 商业险可提前天投保<br />
          如有任何问题，请拔打客服热线 <a href="tel:4009663899">400-966-3899</a>
        </ContentBlock>
        <Toolbar className="lcb-toolbar-button">
          <ButtonsSegmented>
            <Button big color="red" text="历史报价" />
            <Button big fill color="red" text="新建报价" />
          </ButtonsSegmented>
        </Toolbar>
      </Page>
    );
  }
}
