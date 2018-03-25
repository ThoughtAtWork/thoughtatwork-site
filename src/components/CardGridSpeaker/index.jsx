import React from 'react'
import Speaker from './speaker.jsx'
import data from "../../assets/speakers.json"

class CardGridSpeaker extends React.Component {

  createSpeaker = speaker => {
    return (
      <Speaker
         fields = {speaker.fields}
        firstName = {speaker.firstName}
        lastName = {speaker.lastName}
        position = {speaker.position}
        company = {speaker.company}
      />
    );
  }

  createSpeakers = speakers => {
    return speakers.map(this.createSpeaker);
  }

  render() {
    return(
      <div class="speakers__grid-wrap">
        <div class="speakers__grid grid">
          <h2 class="speakers__grid__header">speakers</h2>
          {this.createSpeakers(data.speakers)}
        </div>
      </div>
    );
  }

}

export default CardGridSpeaker
