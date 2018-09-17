import React, { Component } from 'react';
import classnames from 'classnames';
import SpeakerCarousel from './../Speaker/SpeakerCarousel.jsx';
import Link from 'gatsby-link';

export default class HomeSpeakers extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className={classnames('content-Block--margin-top flex flex-column container gridish-container gridish-container--complete')}>
          <h1 className={classnames('gridish-grid__height--medium--12 gridish-grid__height--small--10 gridish-grid__height--xsmall--8')}>our lineup</h1>
          {/* <Link
            className={classnames('gridish-grid__height--small--8 gridish-grid__height--xsmall--7')}
            to="/Speakers"
          >
            <strong>View All Speakers</strong>
          </Link> */}
          <p
            className={classnames('gridish-grid__height--small--8 gridish-grid__height--xsmall--7')}
          >
            <strong>Full Lineup Coming Soon</strong>
          </p>
        </div>
        <SpeakerCarousel />
      </div>
    );
  }
}
