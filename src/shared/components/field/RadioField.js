import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import './RadioField.scss';

@observer
export default class RadioField extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    state: PropTypes.object
  }

  static defaultProps = {
    state: {}
  }

  el;

  handleChange = (e) => {
    let $el = window.Dom7(this.el);
    e.target.checked = true;
    this.props.state.onChange(e.target.value);
    $el.find(':checked').each((k, checked) => {
      // eslint-disable-next-line
      if (checked.value == e.target.value) return;
      checked.checked = false;
    })
  }

  render() {
    const { label, state, color, children } = this.props;
    const options = children.props.children;
    /* eslint-disable */
    return (
      <span className="lcb-radio-field" ref={r => this.el = r}>
        <div className="content-block-title">{label}</div>
        <div className="list-block">
          <ul>
            {React.Children.map(options, (option) => <li>
              <label className="label-checkbox item-content">
                <div className="item-inner">
                  <div className="item-title">{option.props.children}</div>
                </div>
                <input type="checkbox"
                  value={option.props.value}
                  checked={option.props.value == state.value}
                  onChange={this.handleChange} />
                <div className="item-media">
                  <i className={`color-${color} icon icon-form-checkbox`}></i>
                </div>
              </label>
            </li>
            )}
            {state.hasError &&
              <li className="item-divider"><span>{state.error}</span></li>}
          </ul>
        </div>
      </span>
    );
  }
}
