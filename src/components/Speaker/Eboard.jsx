import React from 'react';
import Person from './Person.jsx';
import data from '../../assets/speakers.json';

class Eboard extends React.Component {

  createPerson = (person) => {
    return <Person imageURL={person.image} key={person.name} name={person.name} title={person.title} bio={person.bio}/>;
  };

  createPeople = (people) => {
    return people.map(this.createPerson);
  };

  render() {
    return (
      <div className="container">
        <div className="eboard">
          <h1 className="eboard-header">Brought to you by</h1>
          <div className="eboard-people">{this.createPeople(data.people)}</div>
        </div>
      </div>
    );
  }
}

export default Eboard;
