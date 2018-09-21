import React, { Component } from 'react';
import data from '../../assets/registrations.json';

export default class RegEmail extends Component {

  createPerson = (person) => {
    return (
      <div>
        {/* <SpeakerPhoto firstName={person.firstName} lastName={person.lastName} job={person.job} headshot={person.headshot} /> */}
        <p>
          Thank you for registering for Thought at Work, a design student conference to be held Oct 19-21, 2018, at Rochester Institute of Technology.
          <br />
          <br />
          The following is the information you provided:
          <br />
          <br />
          Name: {person.first + ' ' + person.last}
          <br />
          Address:
          <br />
          {person.address}
          <br />
          {person.city + ', ' + person.state + ' ' + person.zipcode}
          <br />
          <br />
          Phone: {person.phone}
          <br />
          E-mail: {person.email}
          <br />
          <br />
          Interpreter Requested: {person.interpreterNeeded}
          <br />
          Dietary Requirements: {person.dietary}
          <br />
          Amount Paid: ${person.amount}
          <br />
          <br />
          <br />
          Visit the conference website here: http://thoughtatwork.org</p>
        <br />
        <br />
        <br /><br />
        <br />
        <br /><br />
        <br />
        <br /><br />
        <br />
        <br /><br />
        <br />
        <br />
      </div>
    );
  };

  createPeople = (people) => {
    return people.map(this.createPerson);
  };

  render() {
    return (
      <div>
        <div>
          {this.createPeople(data.data)}
        </div>
      </div>
    );
  }
}
