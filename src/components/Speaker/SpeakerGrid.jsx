import React, { Component } from 'react';
import SpeakerCards from './SpeakerCards.jsx';
import data from '../../assets/speakers.json';
import classnames from 'classnames';

export default class Speaker extends Component {
  createPerson = (person) => {
    return <SpeakerCards key={person.lastName} firstName={person.firstName} lastName={person.lastName} position={person.position} />;
  };

  createPeople = (people) => {
    return people.map(this.createPerson);
  };

  render() {
    return (
      <div className={classnames('gridish-grid container')}>
        {this.createPeople(data.speakers)}
      </div>
    );
  }
}

