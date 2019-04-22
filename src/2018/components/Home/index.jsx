import React, { Component } from 'react';
import HomeSpeakers from './HomeSpeakers';
import HomeVideo from './HomeVideo';
import HomeAbout from './HomeAbout';
import HomeSplash from './HomeSplash';
import HomeModal from './HomeModal';

export default class index extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeModal/>
        <HomeSplash/>
        <HomeAbout/>
        <HomeSpeakers/>
        <HomeVideo/>
      </React.Fragment>
    );
  }
}
