import React from 'react';
import SpeakerPhoto from './SpeakerPhoto.jsx';
import data from '../../assets/speakers.json';
import classnames from 'classnames';
import styles from '../../styles/components/speakers/speakerCarousel.module.scss';

class SpeakerCarousel extends React.Component {

  createPerson = (person) => {
    return (
      <div className={classnames(styles.speakerCard, styles.speaker_lineup__padding)}
        key={person.lastName}>
        <SpeakerPhoto firstName={person.firstName} lastName={person.lastName} position={person.position} />
      </div>
    );
  };

  createPeople = (people) => {
    return people.map(this.createPerson);
  };

  render() {
    return (
      <div>
        <div className={classnames(styles.speaker_lineup__Carousel, 'flex gridish-container--complete')}>
          <div className={classnames('flex')}>
            {this.createPeople(data.speakers)}
          </div>
        </div>
      </div>
    );
  }
}

export default SpeakerCarousel;
