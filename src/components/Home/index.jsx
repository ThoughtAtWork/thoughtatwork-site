import React, { Component } from 'react';
import HomeSpeakers from './HomeSpeakers';
import HomeVideo from './HomeVideo';
import HomeAbout from './HomeAbout';
import HomeSplash from './HomeSplash';

export default class index extends Component {
  render() {
    return (
      <div>
        <HomeSplash/>
        <HomeAbout/>
        <HomeSpeakers/>
        <HomeVideo/>
      </div>
    );
  }
}
