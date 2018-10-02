import React, { Component } from 'react';
import SpeakerCards from './SpeakerCards.jsx';
import data from '../../assets/speakers.json';
import classnames from 'classnames';
import styles from '../../styles/components/speakers/speakerGrid.module.scss';

export default class Speaker extends Component {
  createPerson = (person) => {
    return (
      <div className={classnames(styles.speakerSizing)} key={person.headshot}>
        <SpeakerCards firstName={person.firstName} lastName={person.lastName} job={person.job} bio={person.bio} links={person.links} headshot={person.headshot} />
      </div>
    );
  };

  createPeople = (people) => {
    return people.map(this.createPerson);
  };

  render() {
    return (
      <div className={classnames('container flex gridish-container gridish-container--complete gridish-grid', styles.flexibleGrid)}>
        {this.createPeople(data.speakers)}
      </div>
    );
  }
}

