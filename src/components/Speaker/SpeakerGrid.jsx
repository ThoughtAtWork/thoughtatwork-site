import React, { Component } from 'react';
import SpeakerCards from './SpeakerCards.jsx';
import SpeakerDropDown from './SpeakerDropDown.jsx'
import data from '../../assets/speakers.json';
import classnames from 'classnames';
import Header from '../Header/index';

export default class Speaker extends Component {
  createPerson = (person) => {
    return <SpeakerCards key={person.lastName} firstName={person.firstName} lastName={person.lastName} position={person.position} />;
  };

  createPeople = (people) => {
    return people.map(this.createPerson);
  };

  render() {
    return (
      <div>
        <Header pageName='speakers'/>
        <SpeakerDropDown />
        <div className={classnames('gridish-grid container')}>
          {this.createPeople(data.speakers)}
        </div>
      </div>
    );
  }
}

