import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  GridRow,
  GridCol,
  ListItem
} from 'framework7-react';
import { observer } from 'mobx-react';
import classnames from 'classnames';

import './CompanyField.scss';

@observer
export default class CompanyField extends Component {

  static propTypes = {
    companies: PropTypes.array,
    state: PropTypes.object
  }

  static defaultProps = {
    companies: [],
    state: {}
  };

  container;

  componentDidMount() {
    const $container = window.Dom7(this.container);
    $container.find('.col-33').click(this.handleChange);
  }

  handleChange = (e) => {
    if (e.target.tagName === 'IMG') return;
    const company_id = window.Dom7(e.target).find('img:first-child').data('company_id');
    const { state } = this.props;
    if (state.onChange) {
      state.onChange(company_id);
      return;
    }
    this.props.state.value = company_id;
    this.forceUpdate();
  }

  render() {
    const { state, companies } = this.props;
    if (companies.length === 0) return null;
    const l = companies.length > 3 ? (3 - companies.length / 3) : 0;
    let fillups = [];
    for (let i = 0; i < l; i++) fillups.push(<GridCol key={i} width="33"></GridCol>);
    return (
      <span className="lcb-company-field" ref={r => this.container = r}>
        {state.hasError &&
          <ListItem title={state.error} divider />}
        <GridRow noGutter>
          {companies.map((company, i) => (
            <GridCol key={company.company_id} width="33"
              className={`lcb-company-logo lcb-company-logo-${company.company_id}`}>
              <img src={`${require('assets/images/ico_p_on2x.png')}`} alt="" data-company_id={company.company_id}
                className={classnames('lcb-company-selector', { 'lcb-invisible': state.value !== company.company_id })} />
              {i === 0 &&
                <img src={`${require('assets/images/flag_recommend.png')}`} alt="recommand"
                  className="lcb-company-recommend" />}
            </GridCol>
          ))}
          {fillups}
        </GridRow>
      </span>
    );
  }

}
