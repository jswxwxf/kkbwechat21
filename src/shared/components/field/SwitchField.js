import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
} from 'framework7-react';
import { observer } from 'mobx-react';
import classnames from 'classnames';

import './SwitchField.scss';

@observer
export default class SwitchField extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    state: PropTypes.object,
    color: PropTypes.string,
    name: PropTypes.string,
    trueValue: PropTypes.any,
    falseValue: PropTypes.any
  }

  static defaultProps = {
    color: 'blue',
    trueValue: 1,
    falseValue: 0,
    state: {
      value: false
    }
  }

  resolveChecked() {
    return true;
  }

  handleChange = (e) => {
    let { state, trueValue, falseValue } = this.props;
    // eslint-disable-next-line
    state.value = state.value == trueValue ? falseValue : trueValue;
    if (state.onChange) {
      state.onChange({
        name: e.target.name,
        value: state.value
      });
    }
    this.forceUpdate();
  }

  render() {
    const { label, state, className, name, color, trueValue } = this.props;
    /* eslint-disable */
    return (
      <li className="lcb-switch-field">
        <div className="item-content">
          <div className="item-inner">
            <div className="item-title label">{label}</div>
            <div className={classnames("item-input", className)}>
              <label className="label-switch">
                <input name={name} type="checkbox" value={trueValue} checked={state.value == trueValue} onChange={this.handleChange} />
                <div className={classnames("checkbox", `color-${color}`)}></div>
              </label>
            </div>
          </div>
        </div>
        {state.hasError &&
          <ListItem title={state.error} divider />}
      </li>
    );
    /* eslint-enable */
  }
}
