import React from 'react';
import classnames from 'classnames';
import styles from '../../styles/components/speakers/speakerPhoto.module.scss';
import arno from '../../assets/images/speakerHeadshots/arnaud_tanielian.jpg';

let SpeakerPhoto = function statelessFunctionComponentClass(props) {
  // let imageURL = './assets/speaker-headshots/' + props.imageURL;
  let imageURL = './assets/speaker-headshots/' + 'arnaud_tanielian.jpg';


  return (
    <div className={classnames(styles.speakerCard, styles.speaker_lineup__padding)}>
      <img className={classnames(styles.headshotContainer)}
        src={__PATH_PREFIX__ + imageURL}
      />
      {/* <img className={classnames(styles.headshotContainer)}
        src={arno}
      /> */}
      <h2 className={classnames(styles.speakerCard_text__spacing)}>
        {props.firstName + ' ' + props.lastName}
      </h2>
      <p>{props.position}</p>
    </div>
  );
};

export default SpeakerPhoto;
