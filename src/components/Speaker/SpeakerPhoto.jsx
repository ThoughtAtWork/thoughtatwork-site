import React from 'react';
import classnames from 'classnames';
// import MediaQuery from 'react-responsive';
import styles from '../../styles/components/speakers/speakerPhoto.module.scss';
import arno from '../../assets/images/speakerHeadshots/arnaud_tanielian.jpg';

let SpeakerPhoto = function statelessFunctionComponentClass(props) {
  // let imageURL = './assets/' + props.imageURL;
  let imageURL = arno;

  return (<div>

    <div className={classnames(styles.speakerLineup__Scroll, 'flex gridish-container--complete')}>
      {/* <img src={__PATH_PREFIX__ + imageURL}/> */}
      <div className={classnames(styles.headshotContainer__marquee, 'flex')}>
        <img className={classnames(styles.headshotContainer)} src={imageURL} />
        <img className={classnames(styles.headshotContainer)} src={imageURL} />
        <img className={classnames(styles.headshotContainer)} src={imageURL} />
      </div>
    </div>

    <div>
      <p>{props.title}</p>
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>

  </div>);
};

export default SpeakerPhoto;
