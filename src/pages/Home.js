import React, { Component } from 'react';
import HomeSpeakers from '../components/Home/HomeSpeakers';
import HomeAbout from '../components/Home/HomeAbout';

export class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <HomeAbout/>
        <HomeSpeakers/>
      </div>
    );
  }
}

export default home;
