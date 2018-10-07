import React from 'react';
import styles from '../../styles/components/info/infoHotels.module.scss';
import classnames from 'classnames';

let Location = function statelessFunctionComponentClass(props) {
  let name = props.name;
  let address = props.address;
  let travelTime = props.travelTime;
  let website = props.website;

  return (
    <div className={classnames('gridish-grid__col--xsmall--1', 'gridish-grid__col--small--2',
      styles.hotelDiv)}>
      <p className={styles.hotelName}>{name}<br />{address}</p>
      <p>{travelTime} min away</p>
      <a className={styles.hotelLink} href={website}>website</a>
    </div>
  );
};

export default Location;
