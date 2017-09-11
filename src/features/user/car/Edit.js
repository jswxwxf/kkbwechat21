import React, { Component } from 'react';
import {
  Page,
  Navbar,
  List,
  ContentBlock,
  Button
} from 'framework7-react';
import { when } from 'mobx';
import { inject, observer } from 'mobx-react';

import { InputField, SelectField, ModelField } from 'shared/components';
import { carActions, commonActions } from 'shared/actions';
import { CarStore, CommonStore } from 'shared/stores';

import EditForm from './EditForm';
import './Edit.scss';

@inject('utilService')
@observer
export default class Edit extends Component {

  utilService = this.props.utilService;

  isEditing = this.props.type === 'edit';

  state = {
    form: null
  }

  constructor(props, context) {
    super(props, context);
    commonActions.getOils();
    CarStore.carState.car = null;
  }

  componentDidMount() {
    if (this.isEditing) {
      let route = this.utilService.f7Context.getCurrentRoute();
      if (route.query.car_id) carActions.getCar(route.query.car_id);
      when(
        () => CarStore.carState.car != null,
        () => this.setState({ form: new EditForm(CarStore.carState.car, true) })
      );
    } else {
      this.setState({
        form: new EditForm({
          license_no: '',
          brand_id: '',
          series_id: '',
          model_id: '',
          oil_type: '',
          car_vin: '',
          engine_no: ''
        }, false)
      });
    }
  }

  render() {
    const { form } = this.state;
    if (!form) return <Page />
    if (this.isEditing && form.oilType.$ === undefined) return <Page />;
    return (
      <Page id="user-car-edit">
        <Navbar title={this.isEditing ? "车辆编辑" : "车辆添加"} backLink="返回" />
        <List>
          <InputField label="车牌号" placeholder="请输入车牌号" state={form.licenseNo} readonly={this.isEditing} />
          <ModelField state={form.form.$.carModel.$} />
          <SelectField label="油品" pickerHeight="440px" state={form.oilType}>
            <select>
              <option value="">请选择</option>
              {CommonStore.commonState.oils.map(oil =>
                <option key={oil.oil_id} value={oil.oil_id}>{oil.oil_type + oil.name_cn}</option>
              )}
            </select>
          </SelectField>
          <InputField label="车驾号" type="number" placeholder="请输入车驾号" state={form.carVin} />
          <InputField label="发动机号" type="number" placeholder="请输入发动机号" state={form.engineNo} />
        </List>
        <ContentBlock>
          <Button fill big text="保存" onClick={form.handleSubmit} />
        </ContentBlock>
      </Page >
    );
  }

}
