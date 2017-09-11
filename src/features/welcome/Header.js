import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  NavLeft,
  NavCenter,
  Link,
  NavRight
} from 'framework7-react';

export default class Header extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    rightSlot: PropTypes.object
  }

  render() {
    return (
      <Navbar>
        <NavLeft>
          <Link icon="icon-bars" openPanel="left" />
        </NavLeft>
        <NavCenter sliding>{this.props.title}</NavCenter>
        <NavRight>
          {this.props.rightSlot}
        </NavRight>
      </Navbar>
    );
  }

}

