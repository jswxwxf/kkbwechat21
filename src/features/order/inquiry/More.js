import React from 'react';
import { Component } from 'reflux';
import {
  Page,
  Navbar,
  List,
  ContentBlock,
  Button,
  Icon,
  Toolbar,
  ButtonsSegmented,
} from 'framework7-react';
import { observer } from 'mobx-react';

import Header from 'features/welcome/Header';

import { CityField, InputField, RadioField } from 'shared/components';
import { inquiryActions } from 'shared/actions';
import { InquiryStore } from 'shared/stores';

import InquiryForm from './InquiryForm';

import './More.scss';

export default class More extends Component {

  form = InquiryForm._instance;

  store = InquiryStore;
  storeKeys = ['productsForCity'];
  state = {};

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Page id="insurance-inquiry-more">
        <Navbar title="补充信息" backLink="上一步" />
        <Toolbar className="lcb-toolbar-button">
            <Button big fill color="red" text="确认信息" />
        </Toolbar>
      </Page>
    );
  }
}
