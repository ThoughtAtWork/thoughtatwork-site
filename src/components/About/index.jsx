import React from 'react';
import Header from '../Header/index';
import AboutGrid from './AboutGrid';
import data from '../../assets/about.json';
import classnames from 'classnames';

class About extends React.Component {

  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  render() {
    var aboutKids = this.shuffleArray(data.aboutKids);
    var aboutLeads = this.shuffleArray(data.aboutLeads);
    return (
      <div className={classnames()}>
        <Header pageName='about' />
        <div className={classnames(
          'container gridish-container gridish-container--complete')}>
          <h3>history in the making</h3>
          <br />
          <br />
          <p>
            This conference is entirely run by students. We contact speakers, we craft the schedule, we print the posters, and we produce the title sequence. We meet up year-round, we balance our coursework, we wrap our heads around the big picture, and we stress about the details. Our team changes every year and represents a broad range of disciplines and experiences, but we’re tied together by need to inspire, grow, and teach our community.
            <br />
            <br />
          </p>
        </div>
        <div className={'content-Block--margin-top'}>
          <AboutGrid aboutKids={aboutKids} aboutLeads={aboutLeads} />
        </div>
      </div>
    );
  }
}

export default About;