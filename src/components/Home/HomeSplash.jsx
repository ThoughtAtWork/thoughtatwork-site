import React, { Component } from 'react';
import SplashAnimation from './SplashAnimation';
import classnames from 'classnames';

export default class HomeSplash extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className={classnames()}>
        <div className={classnames('container flex flex-column gridish-container--complete gridish-padding--bottom')}>
          <h1 className="flex gridish-padding--bottom">thought at work</h1>
          <h2 className="flex gridish-grid__height--xsmall--10 text-transform--unset"><strike>October 19 - 21, 2018</strike></h2>
        </div>
        <SplashAnimation />
      </div>
    );
  }
}