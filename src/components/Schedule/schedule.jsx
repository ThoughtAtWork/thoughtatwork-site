import React from 'react';
import classnames from 'classnames';
import styles from '../../styles/components/schedule/scheduleMain.module.scss';
import scheduleChevron from '../../assets/images/scheduleChevron.svg';
import scheduleChevronClosed from '../../assets/images/scheduleChevronClosed.svg';

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventOpen: false
    };
  }

  onClick = () => {
    this.setState({ eventOpen: !this.state.eventOpen });
  }

  eventTypeClassName = (type) => {
    // const prefix = 'event_type-';
    switch (type) {
      case 'General Event':
        return '#281E35';
      case 'Lecture':
        return '#FF2350';
      case 'Workshop':
        return '#F2C227';
      case 'Keynote':
        return '#2071FF';
      default:
        return null;
    }
  }

  render() {
    let start = this.props.start.toLowerCase();
    let end = this.props.end.toLowerCase();
    let title = this.props.title;
    let presenterLocation = this.props.presenterLocation;
    let type = this.props.type;
    let description = this.props.description;
    // let day = this.props.day;

    let eventOpen = this.state.eventOpen ? 'block' : 'none';
    let chevron = this.state.eventOpen ? scheduleChevronClosed : scheduleChevron;


    return (
      <div className={styles.schedule_block}
        onClick={this.onClick}
      >
        <div className={classnames(styles.schedule_block__duration, 'flex flex-align-center flex-row flex-justify-between')}>
          <p className={classnames(styles.duration)}>{start} to {end}</p>
          <p className={classnames(styles.event_type)}><span
            style={{ color: this.eventTypeClassName(type) }}
          >{type}</span></p>

        </div>
        <div
          className={classnames(styles.schedule_block__content)}
          style={{ color: this.eventTypeClassName(type) }}
        >
          <div className={classnames(styles.event_spacing)}>
            <div className={classnames('flex flex-justify-between')}
            >
              <h3>{title}</h3>
              <img
                src={chevron}
              />
            </div>
            <p className={styles.presenterLocation}>{presenterLocation}</p>
            <div className={classnames(styles.event_description)} style={{ display: eventOpen }}>
              <p className={classnames(styles.event_description__color)}>
                <span
                  style={{ color: this.eventTypeClassName(type) }}
                >{type}</span>: {description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule;