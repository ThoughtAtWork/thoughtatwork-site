import React from "react";
import Scheduled from "./schedule.jsx";
import classnames from 'classnames';
import data from '../../assets/schedule.json';
import styles from '../../styles/components/schedule/scheduleMain.module.scss';


class Schedule extends React.Component {
  createSchedule = events => {
		  return (
			<Scheduled
				start={events.start}
        end={events.end}
        title={events.title}
        location={events.location}
        type={events.type}
        description={events.description}
        key={events.title}
			/>
		  );
  }

  initializeSchedule = events => {
		  return events.map(this.createSchedule);
  }


  render() {
    return (  
      <div>
        <h1 className={styles.schedule_title}>schedule</h1>
        
        <div className={styles.schedule_wrapper}>
          <div className={classnames('event-container', styles.container_center)}>

            <div className={styles.floating_buttons}>
              <a className={styles.button_schedule} href="#friday">friday</a>
              <a className={classnames(styles.button_schedule, styles.button_schedule_slide)} href="#saturday">saturday</a>
              <a className={classnames(styles.button_schedule, styles.button_schedule_slide)} href="#sunday">sunday</a>
            </div>
              
            <h2 id="friday" className={styles.date_header}>friday</h2>
            {this.initializeSchedule(data.friday)}
          
            <h2 id="saturday" className={styles.date_header}>saturday</h2>
            {this.initializeSchedule(data.saturday)}
          
            <h2 id="sunday" className={styles.date_header}>sunday</h2>
            {this.initializeSchedule(data.sunday)}
            
          </div>
        </div>
      </div>        
    );
  }
}

export default Schedule;
