import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
} from 'framework7-react';
import { observer } from 'mobx-react';
import _ from 'lodash';

import './SelectField.scss';

@observer
export default class SelectField extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    searchable: PropTypes.bool,
    pageTitle: PropTypes.string,
    pickerHeight: PropTypes.string,
    state: PropTypes.object
  }

  static defaultProps = {
    state: {
      onChange: _.noop
    },
    searchable: false
  }

  container;

  componentDidMount() {
    if (!this.props.pickerHeight) return;
    let $link = window.Dom7(this.container).find('a');
    $link[0].dataset.pickerHeight = this.props.pickerHeight;
  }

  handleChange = (e) => {
    this.props.state.onChange(e.target.value);
  }

  resolveSelected(options, state) {
    React.Children.forEach(options, (option) => {
      if (!option) return;
      if (option.type === 'optgroup') {
        this.resolveSelected(option.props.children, state);
        return;
      }
      /* eslint-disable */
      if (option.props.value == state.value) {
        throw { selected: option.props.children };
      }
      /* eslint-enable */
    });
  }

  resolvePlaceholder(options) {
    if (this.props.placeholder) return this.props.placeholder;
    let placeholder = options.props ? options.props.children : options[0].props.children;
    try { this.resolveSelected(options, this.props.state) } catch (e) {
      if (!e.selected) throw e;
      return e.selected;
    }
    return placeholder;
  }

  resolveFalse(value) {
    /* eslint-disable */
    if (value == "false") return false;
    if (value == 0) return false;
    /* eslint-enable */
    return true;
  }

  render() {
    const { label, searchable, pageTitle, state } = this.props;
    let options = this.props.children.props.children;
    let placeholder = this.resolvePlaceholder(options);
    let searchProps = searchable ? {
      smartSelectSearchbar: true,
      smartSelectSearchbarPlaceholder: "搜索",
      smartSelectSearchbarCancel: "取消"
    } : undefined;
    // console.log('state.value: ', state.value);
    return (
      <span className="lcb-select-field" data-value={this.resolveFalse(state.value)} ref={r => this.container = r}>
        <ListItem title={label} after={placeholder}
          smartSelect
          smartSelectOpenIn="picker"
          smartSelectBackOnSelect
          smartSelectBackText="关闭"
          smartSelectPageTitle={pageTitle}
          {...searchProps}
          value={state.value}>
          <select defaultValue={state.value} onChange={this.handleChange}>
            {options}
          </select>
        </ListItem>
        {/* <ListItem title={state.value} divider /> */}
        {state.hasError &&
          <ListItem title={state.error} divider />}
      </span>
    );
  }
}
