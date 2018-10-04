import React from 'react';
import classnames from 'classnames';
import styles from '../../styles/components/schedule/scheduleMain.module.scss';

let schedule = function statelessFunctionComponentClass(props) {
  let start = props.start.toLowerCase();
  let end = props.end.toLowerCase();
  let title = props.title;
  let presenterLocation = props.presenterLocation;
  let type = props.type;
  let description = props.description;
  let day = props.day;

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
    <div className={styles.schedule_block}>
      <div className={classnames(styles.schedule_block__duration, 'flex flex-align-center')}>
        <p className={styles.duration}>{start} to {end} {day}</p>
      </div>
      <div className={classnames(styles.schedule_block__border)}>
        <div className={styles.event_info_location}>
          <h3 className={styles.event_title}>{title}</h3>
          <p className={styles.presenterLocation}>{presenterLocation}</p>
        </div>
        <div className={classnames(styles.event_type, styles.event_margin__bottom)}>
          <p><span className={eventTypeClassName(type)}>{type}</span>: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default schedule;
