import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import classnames from 'classnames';

import './Breadcrumb.scss';

@observer
export default class Breadcrumb extends Component {

  static propTypes = {
    type: PropTypes.oneOf(["basic", "triangle", "step", "dot", "dotstep"]),
    step: PropTypes.number
  }

  static defaultProps = {
    type: 'dotstep',
    step: 1
  }

  resolveClassNames() {
    switch (this.props.type) {
      case 'triangle':
        return ['cd-breadcrumb', 'custom-separator'];
      case 'step':
        return ['cd-multi-steps', 'text-center'];
      case 'dot':
        return ['cd-multi-steps', 'text-top'];
      case 'dotstep':
        return ['cd-multi-steps', 'text-bottom', 'count'];
      default:
        return ['cd-breadcrumb'];
    }
  }

  render() {
    const { step, children } = this.props;
    let steps = children.props.children;
    return (
      <section className="lcb-breadcrumb">
        <nav>
          <ol className={classnames(this.resolveClassNames())}>
            {React.Children.map(steps, (option, i) => {
              const index = i + 1;
              let className = "visited";
              if (step === index) className = "current";
              if (index > step) className = "";
              return React.cloneElement(option,
                { className });
            })}
          </ol>
        </nav>
      </section>
    );
  }

}

// eslint-disable-next-line
{/* <section>
  <h2>1 - Basic</h2>

  <nav>
    <ol className="cd-breadcrumb">
      <li><a href="#0">Home</a></li>
      <li><a href="#0">Gallery</a></li>
      <li><a href="#0">Web</a></li>
      <li className="current"><em>Project</em></li>
    </ol>
  </nav>
</section>

  <section>
    <h2>2 - Custom Separator</h2>

    <nav>
      <ol className="cd-breadcrumb custom-separator">
        <li><a href="#0">Home</a></li>
        <li><a href="#0">Gallery</a></li>
        <li><a href="#0">Web</a></li>
        <li className="current"><em>Project</em></li>
      </ol>
    </nav>
  </section>

  <section>
    <h2>3 - Custom Icons</h2>

    <nav>
      <ol className="cd-breadcrumb custom-separator custom-icons">
        <li><a href="#0">Home</a></li>
        <li><a href="#0">Gallery</a></li>
        <li><a href="#0">Web</a></li>
        <li className="current"><em>Project</em></li>
      </ol>
    </nav>
  </section>

  <section>
    <h2>4 - Triangle</h2>

    <nav>
      <ol className="cd-breadcrumb triangle">
        <li><a href="#0">Home</a></li>
        <li><a href="#0">Gallery</a></li>
        <li><a href="#0">Web</a></li>
        <li className="current"><em>Project</em></li>
      </ol>
    </nav>
  </section>

  <section>
    <h2>5 - Triangle with custom icons</h2>

    <nav>
      <ol className="cd-breadcrumb triangle custom-icons">
        <li><a href="#0">Home</a></li>
        <li><a href="#0">Gallery</a></li>
        <li className="current"><em>Web</em></li>
        <li><em>Project</em></li>
      </ol>
    </nav>
  </section>

  <section>
    <h2>6 - Basic Multi-Steps</h2>

    <nav>
      <ol className="cd-multi-steps text-center">
        <li className="visited"><a href="#0">Cart</a></li>
        <li className="visited" ><a href="#0">Billing</a></li>
        <li className="current"><em>Delivery</em></li>
        <li><em>Review</em></li>
      </ol>
    </nav>
  </section>

  <section>
    <h2>7 - Basic Multi-Steps with Custom Icons</h2>

    <nav>
      <ol className="cd-multi-steps text-center custom-icons">
        <li className="visited"><a href="#0">Cart</a></li>
        <li className="visited" ><a href="#0">Billing</a></li>
        <li className="current"><em>Delivery</em></li>
        <li><em>Review</em></li>
      </ol>
    </nav>
  </section>

  <section>
    <h2>8 - Dot Indicators</h2>

    <nav>
      <ol className="cd-multi-steps text-top">
        <li className="visited"><a href="#0">Cart</a></li>
        <li className="visited" ><a href="#0">Billing</a></li>
        <li className="current"><em>Delivery</em></li>
        <li><em>Review</em></li>
      </ol>
    </nav>
  </section>

  <section>
    <h2>9 - Dot Indicators with Steps Counter</h2>

    <nav>
      <ol className="cd-multi-steps text-bottom count">
        <li className="visited"><a href="#0">Cart</a></li>
        <li className="visited" ><a href="#0">Billing</a></li>
        <li className="current"><em>Delivery</em></li>
        <li><em>Review</em></li>
      </ol>
    </nav>
  </section> */}