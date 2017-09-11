import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import _ from 'lodash';

import { commonActions } from 'shared/actions';
import { CommonStore } from 'shared/stores';
import { Utils } from 'shared/utility';

import ModelFieldForm from './ModelFieldForm';
import SelectField from './SelectField';
import './ModelField.scss';

@observer
export default class ModelField extends Component {

  static propTypes = {
    state: PropTypes.object.isRequired,
    readonly: PropTypes.bool
  }

  static defaultProps = {
    readonly: false,
    state: new ModelFieldForm({
      brand_id: '',
      series_id: '',
      model_id: ''
    })
  }

  constructor(props, context) {
    super(props, context);
    let { brandId, seriesId, modelId } = props.state;
    this.disposers = [
      brandId.$mobx.observe(change => {
        if (change.type === 'update' && change.name === 'value') {
          seriesId.onChange("");
        }
      }),
      seriesId.$mobx.observe(change => {
        if (change.type === 'update' && change.name === 'value') {
          modelId.onChange("");
        }
      })
    ];
  }

  componentWillUnmount() {
    this.disposers.forEach(disposer => disposer());
  }

  render() {
    let { state, readonly } = this.props;
    return (
      <span className="lcb-model-field">
        <BrandField readonly={readonly} state={state.brandId} placeholder={state.carBrand} />
        <SeriesField readonly={readonly} state={state.seriesId} brandId={state.brandId.value} />
        <ModelsField readonly={readonly} state={state.modelId} serieId={state.seriesId.value} />
      </span>
    );
  }
}

@observer
class BrandField extends Component {

  static propTypes = {
    state: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    readonly: PropTypes.bool
  }

  static defaultProps = {
    readonly: false
  }

  constructor(props, context) {
    super(props, context);
    commonActions.getBrands();
  }

  render() {
    const { brands } = CommonStore.commonState;
    const brandMap = _.groupBy(brands, 'py');
    const { state, readonly, placeholder } = this.props;
    return (
      <SelectField label="品牌" placeholder={placeholder}
        link={!readonly} pickerHeight="75%" searchable pageTitle="请选择品牌"
        state={state}>
        <select>
          <option value="">请选择</option>
          {brands && _.map(brandMap, (brands, k) => {
            return (<optgroup key={k} label={k}>{
              brands.map(brand =>
                <option key={brand.brand_id} value={brand.brand_id}>{brand.name_cn}</option>
              )}
            </optgroup>)
          })}
        </select>
      </SelectField>
    );
  }

}

@observer
class SeriesField extends Component {

  static propTypes = {
    state: PropTypes.object.isRequired,
    brandId: PropTypes.any,
    readonly: PropTypes.bool
  }

  static defaultProps = {
    readonly: false
  }

  select;

  constructor(props, context) {
    super(props, context);
    this.refreshSeries(this.props.brandId);
  }

  @action
  componentWillReceiveProps(nextProps) {
    this.refreshSeries(nextProps.brandId);
    let $select = window.Dom7(ReactDOM.findDOMNode(this.select));
    $select.find('.item-after').text('请选择');
  }

  refreshSeries = (brandId) => {
    if (Utils.isEmpty(brandId)) {
      CommonStore.commonState.series = null;
      return;
    }
    commonActions.getSeries(brandId);
  }

  render() {
    const { series } = CommonStore.commonState;
    const { state, readonly } = this.props;
    return (
      <SelectField label="车系"
        link={!readonly} pickerHeight="75%" searchable pageTitle="请选择车系"
        state={state} ref={r => this.select = r}>
        <select>
          <option value="">请选择</option>
          {series && series.map(serie =>
            <option key={serie.series_id} value={serie.series_id}>{serie.name_cn}</option>
          )}
        </select>
      </SelectField>
    );
  }

}

@observer
class ModelsField extends Component {

  static propTypes = {
    state: PropTypes.object.isRequired,
    serieId: PropTypes.any,
    readonly: PropTypes.bool
  }

  static defaultProps = {
    readonly: false
  }

  select;

  constructor(props, context) {
    super(props, context);
    this.refreshModels(this.props.serieId);
  }

  @action
  componentWillReceiveProps(nextProps) {
    this.refreshModels(nextProps.serieId);
    let $select = window.Dom7(ReactDOM.findDOMNode(this.select));
    $select.find('.item-after').text('请选择');
  }

  @action
  refreshModels(serieId) {
    if (Utils.isEmpty(serieId)) {
      CommonStore.commonState.models = null;
      return;
    }
    commonActions.getModels(serieId);
  }

  render() {
    const { models } = CommonStore.commonState;
    const modelsMap = _.groupBy(models, 'years');
    const { state, readonly } = this.props;
    return (
      <SelectField label="车型"
        link={!readonly} pickerHeight="75%" searchable pageTitle="请选择车系"
        state={state} ref={r => this.select = r}>
        <select>
          <option value="">请选择</option>
          {models && _.map(modelsMap, (models, k) => {
            return (<optgroup key={k} label={k}>{
              models.map(model =>
                <option key={model.model_id} value={model.model_id}>{model.name_cn}</option>
              )}
            </optgroup>)
          })}
        </select>
      </SelectField>
    );
  }

}