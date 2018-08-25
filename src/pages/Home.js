import React, { Component } from 'react';
import HomeSpeakers from '../components/Home/HomeSpeakers';

export class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <HomeSpeakers/>
      </div>
    );
  }
}

export default home;
