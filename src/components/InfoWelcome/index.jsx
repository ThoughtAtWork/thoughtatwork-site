import React from 'react';
import styles from '../../styles/components/info/infoEverythingElse.module.scss';
import infoHereImage from '../../assets/images/info_here_photo.png';
import cateringImage from '../../assets/images/catering.png';
import classnames from 'classnames';

class InfoWelcome extends React.Component {
  render() {
    return (
      <div className={classnames('gridish-container--complete container gridish-grid')}>
        <div className={classnames('gridish-grid__col--small--4 gridish-grid__col--xsmall--3')}>
          <p>Check-in begins at 1:30pm on Friday morning. The opening reception begins at 2am.
              At check-in you’ll get a lanyard and name tag, which you’ll need for entry into any Thought at Work event.</p>
          <p className={styles.infoText}>You’ll also pick up a program brochure for a detailed view of the conference and schedule.</p>
        </div>

        <img className={styles.infoPicture} src={infoHereImage}></img>

        <div className={classnames('gridish-grid__col--small--4 gridish-grid__col--xsmall--3', styles.cateringText)}>
          <p>Not only do we bring you some of the world's best creatives, we also provide something equally enticing&mdash;
              free food. </p>
        </div>
        <div className={classnames('gridish-grid__col--small--5 gridish-grid__col--xsmall--2', styles.cateringMeals)}>
        </div>

        <img className={styles.infoPicture} src={cateringImage}></img>
      </div>
    );
  }
}

export default InfoWelcome;
