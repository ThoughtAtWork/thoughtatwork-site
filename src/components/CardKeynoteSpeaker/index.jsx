import React from 'react';
import KeynoteSpeaker from './keynote_speaker.jsx';
import data from '../../assets/keynote_speakers.json';

class CardKeynoteSpeaker extends React.Component {
  createKeynoteSpeaker = speaker => {
    return (
      <KeynoteSpeaker
        headshot={speaker.headshot}
        firstName={speaker.firstName}
        lastName={speaker.lastName}
        position={speaker.position}
        company={speaker.company}
        key={speaker.lastName}
      />
    );
  }

  createKeynoteSpeakers = speakers => {
    return speakers.map(this.createKeynoteSpeaker);
  }

  render() {
    return (
      <div className='speakers__keynote'>
        <h2 className='speakers__keynote__header'>keynote</h2>
        {this.createKeynoteSpeakers(data.keynoteSpeakers)}
      </div>
    );
  }
}

export default CardKeynoteSpeaker;
