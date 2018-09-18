import React from 'react';
import classnames from 'classnames';
import styles from '../../styles/components/speakers/speakerPhoto.module.scss';

let SpeakerPhoto = function statelessFunctionComponentClass(props) {
  let imageURL = './assets/speaker-headshots/' + 'arnaud_tanielian.jpg';
  let imageURLPrefix = './assets/speaker-headshots/';
  let headShotURL = __PATH_PREFIX__ + imageURLPrefix + props.headshot
    + '.jpg';

  return (
    <div>
      <img className={classnames(styles.headshotContainer)}
        src={headShotURL}
      />
      {/* <img className={classnames(styles.headshotContainer)}
        src={arno}
      /> */}
      <h2 className={classnames(styles.speakerCard_text__spacing)}>
        {props.firstName + ' ' + props.lastName}
      </h2>
      <p>{props.position + ' at ' + props.company}</p>
    </div>
  );
};

export default SpeakerPhoto;
