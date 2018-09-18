import React from 'react';
import SpeakerPhoto from './SpeakerPhoto.jsx';
import data from '../../assets/speakers.json';
import classnames from 'classnames';
import styles from '../../styles/components/speakers/speakerCarousel.module.scss';
import DragScroll from 'react-dragscroll';

class SpeakerCarousel extends React.Component {

  createPerson = (person) => {
    return (
      <div className={classnames(styles.speakerCard, styles.speaker_lineup__padding)}
        key={person.headshot}>
        <SpeakerPhoto firstName={person.firstName} lastName={person.lastName} job={person.job} headshot={person.headshot} />
      </div>
    );
  };

  createPeople = (people) => {
    return people.map(this.createPerson);
  };

  render() {
    return (
      <div>
        <DragScroll height={'unset'} width={'unset'} className={classnames(styles.speaker_lineup__Carousel, 'flex gridish-container--complete')}>
          <div className={classnames('flex')}>
            {this.createPeople(data.speakers)}
          </div>
        </DragScroll>
      </div>
    );
  }
}

export default SpeakerCarousel;
