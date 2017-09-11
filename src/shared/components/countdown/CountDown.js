import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button
} from 'framework7-react';
import _ from 'lodash';
import classnames from 'classnames';

import './CountDown.scss';

export default class CountDown extends Component {

  static propTypes = {
    onPress: PropTypes.func
  }

  static defaultProps = {
    onPress: _.noop
  }

  state = {
    buttonText: '获取验证码',
    disabled: false
  }

  handleCountDown = (e) => {
    this.props.onPress(e, this);
  };

  startCountDown() {
    const times = 60;
    let count = times - 1;
    const timer = setInterval(() => {
      if (count <= 0) {
        this.setState({
          buttonText: "重新获取",
          disabled: false
        })
        clearInterval(timer);
        return;
      }
      this.setState({
        buttonText: String(count--),
        disabled: true
      })
    }, 1000);
  }

  render() {
    let classNames = classnames('lcb-count-down', { disabled: this.state.disabled });
    return (
      <Button text={this.state.buttonText} className={classNames} onClick={this.handleCountDown} />
    );
  }

}
