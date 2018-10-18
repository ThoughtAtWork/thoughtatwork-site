import React from 'react';
import Header from '../Header/index';
import AboutGrid from './AboutGrid';
import data from '../../assets/about.json';
import classnames from 'classnames';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 2,
      count: 0
    };
  }


  shuffleArray = (array) => {
    let i = array.length - 1;
    if (this.state.count != this.state.limit) {
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    return array;
  }

  render() {
    return (
      <div className={classnames()}>
        <Header pageName='about' />
        <div className={classnames(
          'container gridish-container gridish-container--complete')}>
          <h3>history in the making</h3>
          <br />
          <br />
          <p>
            This conference is entirely run by students. We contact speakers, we craft the schedule, we print the posters, and we produce the title sequence. We meet up year-round, we balance our coursework, we wrap our heads around the big picture, and we stress about the details. Our team changes every year and represents a broad range of disciplines and experiences, but we’re tied together by need to inspire, grow, and teach our community. This year's conference was lead by <a href="http://twitter.com/jacobdfrank">Jacob Frank</a>, <a href="https://www.instagram.com/frank_lbarletta/">Frank Barletta</a>, <a href="https://www.instagram.com/_ericastevens/">Erica Stevens</a> and <a href="https://mxm3995.myportfolio.com/projects">Morgan Merrick</a>.
            <br />
            <br />
          </p>
        </div>
        <div className={'content-Block--margin-top'}>
          <AboutGrid aboutKids={this.shuffleArray(data.aboutKids)} aboutLeads={this.shuffleArray(data.aboutLeads)} />
        </div>
      </div>
    );
  }
}

export default About;