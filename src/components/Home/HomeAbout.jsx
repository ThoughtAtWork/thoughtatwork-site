import React, { Component } from 'react';
import classnames from 'classnames';
import HomeAboutAnimation from './HomeAboutAnimation';

export default class HomeAbout extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       
    };
  }
  
  render() {
    let aboutMaxWidthStyle = {
      maxWidth: '570px'
    };
    return (
      <div className={classnames('gridish-container--complete container gridish-grid content-Block--margin-top')}>
        <h3 className={classnames('gridish-grid__col--medium--5 gridish-grid__col--small--4 gridish-grid__col--xsmall--3 gridish-grid__height--xsmall--10 text-transform--unset')}>A design conference made for students by students.</h3>
        <HomeAboutAnimation/>
        <h3 className={classnames('gridish-grid__col--medium--5 gridish-grid__col--small--5 gridish-grid__col--xsmall-4 text-transform--unset')} style={aboutMaxWidthStyle}>We provide a variety of talks, design workshops, after parties and more. Held at RIT in Rochester, NY.</h3>
      </div>
    );
  }
}
