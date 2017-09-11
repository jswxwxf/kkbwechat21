import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
  Popup,
} from 'framework7-react'
import $ from 'jquery';

import './Dialog.scss';

export default class Dialog extends Component {

  static propTypes = {
    opened: PropTypes.bool,
    className: PropTypes.string
  }

  static defaultProps = {
    opened: false
  }

  state = {
    opened: this.props.opened
  }

  popup;

  componentDidMount() {
    let $popup = $(ReactDOM.findDOMNode(this.popup));
    $popup.on('popup:closed', () => this.hide());
    $('body').append($popup.addClass(this.props.className).clone());
  }

  show() {
    this.setState({ opened: true });
  }

  hide() {
    this.setState({ opened: false });
  }

  render() {
    const { children } = this.props;
    const { opened } = this.state;
    return (
      <Popup ref={r => this.popup = r} opened={opened}>
        {children(this)}
      </Popup>
    );
  }

}