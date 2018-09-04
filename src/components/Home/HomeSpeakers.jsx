import React, { Component } from 'react';
import classnames from 'classnames';
import Speaker from './../Speaker/Speaker.jsx';

export default class HomeSpeakers extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className={classnames('container gridish-padding--top')}>
        <h1 className={classnames('flex gridish-container--complete')}>our lineup</h1>
        <Speaker/>
      </div>
    );
  }
}
