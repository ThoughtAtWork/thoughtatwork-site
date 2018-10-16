import React, { Component } from 'react';
import AboutCards from './AboutCards.jsx';
import data from '../../assets/about.json';
import classnames from 'classnames';
import styles from '../../styles/components/about/aboutGrid.module.scss';

export default class AboutGrid extends Component {
  createPerson = (person) => {
    return (
      <div className={classnames(styles.speakerSizing)} key={person.name}>
        <AboutCards name={person.name} team={person.team} year={person.year} major={person.major} link={person.link} />
      </div>
    );
  };

  createPeople = (people) => {
    return people.map(this.createPerson);
  };

  render() {
    return (
      <div>
        <h3 className={classnames(
          'container gridish-container gridish-container--complete', styles.coolKids)}>The cool kids</h3>

        <div className={classnames('container flex gridish-container gridish-container--complete gridish-grid', styles.flexibleGrid)}>
          {this.createPeople(data.about1)}
        </div>
      </div>
    );
  }
}

