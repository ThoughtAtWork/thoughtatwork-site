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
      <div>
        <div className={classnames('container flex flex-justify-between flex-row gridish-container--complete')}>
          <h2 className={classnames()}>thought at work</h2>
        </div>
        <SplashAnimation />
        <div className={classnames('container flex flex-justify-between flex-row gridish-container--complete')}>
          <h2 className={classnames()}>october 19 - 21</h2>
        </div>
      </div>
    );
  }
}