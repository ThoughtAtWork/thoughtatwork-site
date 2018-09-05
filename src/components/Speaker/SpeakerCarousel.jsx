import React from 'react';
import SpeakerPhoto from './SpeakerPhoto.jsx';
import data from '../../assets/speakers.json';
import classnames from 'classnames';
import styles from '../../styles/components/speakers/speakerPhoto.module.scss';

class SpeakerCarousel extends React.Component {

  createPerson = (person) => {
    return <SpeakerPhoto imageURL={person.image} key={person.lastName} firstName={person.firstName} lastName={person.lastName} position={person.position}/>;
  };

  createPeople = (people) => {
    return people.map(this.createPerson);
  };

  render() {
    return (
      <div className={classnames(styles.speakerLineup__Scroll, 'flex gridish-container--complete')}>
        <div className={classnames(styles.headshotContainer__marquee, 'flex')}>
          {this.createPeople(data.speakers)}
          <SpeakerPhoto/>
        </div>
      </div>
    );
  }
}

export default SpeakerCarousel;
