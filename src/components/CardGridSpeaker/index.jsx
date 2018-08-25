import React from 'react';
import Speaker from './speaker.jsx';
import data from '../../assets/speakers.json';

class CardGridSpeaker extends React.Component {
  createSpeaker = speaker => {
    return (
      <Speaker
        fields={speaker.fields}
        firstName={speaker.firstName}
        lastName={speaker.lastName}
        position={speaker.position}
        company={speaker.company}
        key={speaker.lastName}
      />
    );
  }

  createSpeakers = speakers => {
    return speakers.map(this.createSpeaker);
  }

  render() {
    return (
      <div className='speakers__grid-wrap'>
        <div className='speakers__grid grid'>
          <h2 className='speakers__grid__header'>speakers</h2>
          {this.createSpeakers(data.speakers)}
        </div>
      </div>
    );
  }
}

export default CardGridSpeaker;
