import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';

import { UtilService } from 'shared/services';

import './Dialog.scss';

export default class Dialog extends Component {

  static propTypes = {
    id: PropTypes.string
  }

  static defaultProps = {
    id: Date.now()
  }

  utilService = UtilService._instance;

  componentDidMount() {
    this.refreshDialog();
  }

  componentDidUpdate() {
    this.refreshDialog();
  }

  componentWillUnmount() {
    window.Dom7(`#${this.props.id}`).remove();
  }

  refreshDialog() {
    const { children } = this.props;
    const $popupContainer = window.Dom7('#popups');
    window.Dom7(`#${this.props.id}`).remove();
    $popupContainer.append(ReactDOMServer.renderToString((
      <div className="popup" id={this.props.id}>
        {children(this)}
      </div>
    )));
    this.refreshProgressBar();
  }

  refreshProgressBar() {
    const $$ = window.Dom7;
    $$('.progressbar').each((i, progressbar) => {
      this.utilService.f7App.setProgressbar(progressbar,
        $$(progressbar).data('progress'));
    })
  }

  componentWillUnmount() {
    window.Dom7(`#${this.props.id}`).remove();
    // ReactDOM.unmountComponentAtNode(window.Dom7(`.${this.props.className}`)[0])
  }

  show() {
    this.utilService.popup(this.props.id);
  }

  hide() {
    // this.setState({ opened: false });
  }

  render() {
    return null;
  }

}