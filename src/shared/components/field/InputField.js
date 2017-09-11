import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  FormLabel,
  FormInput,
} from 'framework7-react';
import { observer } from 'mobx-react';

import './InputField.scss';

@observer
export default class InputField extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    state: PropTypes.object,
    type: PropTypes.string,
    readonly: PropTypes.bool,
    rightSlot: PropTypes.object
  }

  static defaultProps = {
    type: 'text',
    readonly: false,
    state: {}
  }

  render() {
    const { label, placeholder, readonly, type, state, rightSlot } = this.props;
    if (readonly) {
      return (
        <span className="lcb-input-field">
          <ListItem title={label} after={state.value} />
          {state.hasError &&
            <ListItem title={state.error} divider />}
        </span>
      )
    }
    return (
      <span className="lcb-input-field">
        <ListItem>
          <FormLabel>{label}</FormLabel>
          <FormInput type={type} placeholder={placeholder} value={state.value} onInput={state.onChange} />
          {rightSlot}
        </ListItem>
        {state.hasError &&
          <ListItem title={state.error} divider />}
      </span>
    );
  }
}
