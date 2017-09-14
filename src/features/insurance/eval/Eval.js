import React from 'react';
import { Component } from 'reflux';
import {
  Page,
  List,
  ListItem,
  ContentBlock,
  Button,
} from 'framework7-react';
import { observer } from 'mobx-react';

import Header from 'features/welcome/Header';

import { InputField, SelectField, Dialog } from 'shared/components';
import { insuranceActions } from 'shared/actions';
import { InsuranceStore } from 'shared/stores';

import Result from './Result';
import EvalForm from './EvalForm';
import './Eval.scss';

@observer
export default class Eval extends Component {

  form = new EvalForm();

  store = InsuranceStore;
  storeKeys = ['evalOptions', 'evalResult'];
  state = {};

  constructor(props, context) {
    super(props, context);
    insuranceActions.getEvalOptions();
  }

  render() {
    const { evalOptions, evalResult } = this.state;
    if (!evalOptions) return <Page />;
    return (
      <Page id="insurance-eval" fixedSlot={<Header title="保费试算" />}>
        <img src={`${require('assets/images/banner_eval.png')}`} alt="保费试算" className="lcb-img-responsive" />
        <List form>
          <SelectField label="城市" state={this.form.city}>
            <select>
              <option value="">请选择</option>
              {evalOptions.city.map(city =>
                <option key={city.qValue} value={city.qValue}>{city.qLabel}</option>)}
            </select>
          </SelectField>
          <SelectField label="车龄（年）" state={this.form.carAge}>
            <select>
              <option value="">请选择</option>
              {evalOptions.car_age.map(age =>
                <option key={age.qValue} value={age.qValue}>{age.qLabel}</option>)}
            </select>
          </SelectField>
          <InputField label="车辆购置价格（万）" placeholder="请输入价格" type="number" state={this.form.carPrice} />
          <SelectField label="往年理赔次数" state={this.form.claims}>
            <select>
              <option value="">请选择</option>
              {evalOptions.claims.map(claim =>
                <option key={claim.qValue} value={claim.qValue}>{claim.qLabel}</option>)}
            </select>
          </SelectField>
        </List>
        <List>
          <ListItem title="保险" after="车损+50万第三者责任险+不计免赔" />
        </List>
        <ContentBlock>
          <Button fill big text="试算" onClick={this.form.handleSubmit} />
        </ContentBlock>
        {evalResult && <Dialog id="insurance-eval-result">
          {d => <Result dialog={d} result={evalResult} />}
        </Dialog>}
      </Page>
    );
  }
}
