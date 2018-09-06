import React, { Component } from 'react';
import HomeSpeakers from './HomeSpeakers';
import HomeAbout from './HomeAbout';
import HomeSplash from './HomeSplash';

export default class index extends Component {
  render() {
    return (
      <div>
        <HomeSplash/>
        <HomeAbout/>
        <HomeSpeakers/>
      </div>
    );
  }
}
