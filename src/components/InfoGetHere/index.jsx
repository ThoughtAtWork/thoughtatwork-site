import React from 'react';
import RITMap from './map.jsx';
import classnames from "classnames";
import styles from "../../styles/components/info/infoDirections.module.scss"

class InfoGetHere extends React.Component {
  render() {
    return (
      <div className={classnames("gridish-container--complete container gridish-grid")}>
          <div className={classnames('gridish-grid__col--small--5 gridish-grid__col--xsmall--3')}>
            <p>Rochester Institute of Technology (RIT) is located at 1 Lomb Memorial Drive, Rochester, NY 14623. Approximately 20 minutes from Greater Rochester International Airport and the Amtrak and Bus stations, there are multiple ways
							to travel to Rochester and TAW. For information on transportation use these links:</p>
            <div className={styles.directionLink}><a href="http://www.visitrochester.com" target="_blank">visitrochester.com</a></div>
            <div className={styles.directionLink}><a href="https://www.rit.edu" target="_blank">rit.edu</a></div>    
            <p className={styles.directionText}>Once you arrive on campus, signs will direct you to parking in lots G and H and to the check-in at Booth Hall (Building 7A). If you arrive on Friday, you'll need to get a visitor pass from the welcome center located on Lomb
							Memorial Drive, just past the roundabout.</p>
          </div>

          <RITMap
            isMarkerShown={false}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKWnMqZ6W7aPN8p5da5KcsySZuDOKFR4A"
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div className={styles.map} />}
          />
          <div className={styles.directionLink}><a href="https://www.rit.edu/fa/facilities/maps" target="_blank">rit interactive map</a></div>
      </div>
    );
  }
}

export default InfoGetHere;
