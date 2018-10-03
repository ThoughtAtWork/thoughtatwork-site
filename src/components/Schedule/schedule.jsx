import React from 'react';
import classnames from 'classnames';
import styles from '../../styles/components/schedule/scheduleMain.module.scss';

let schedule = function statelessFunctionComponentClass(props) {
  let start = props.start;
  let end = props.end;
  let title = props.title;
  let location = props.location;
  let type = props.type;
  let description = props.description;

  function eventTypeClassName(type) {
    const prefix = 'event_type-';
    switch (type) {
      case 'general':
        return prefix + 'general';
      case 'lecture':
        return prefix + 'lecture';
      case 'workshop':
        return prefix + 'workshop';
      default:
        return null;
    }
  }

  return (
    <div className={styles.schedule_box}>
      <div className={styles.event_info_duration}>
        <p className={styles.duration}>{start} to {end}</p>
      </div>
      <div className={styles.event_info_location}>
        <h3 className={styles.event_title}>{title}</h3>
        <p className={styles.event_location}>{location}</p>
      </div>
      <div className={styles.event_type}>
        <p><span className={eventTypeClassName(type)}>{type}</span>: {description}</p>
      </div>
    </div>
  );
};

export default schedule;
