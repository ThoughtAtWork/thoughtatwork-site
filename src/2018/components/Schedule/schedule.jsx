import React from 'react';
import classnames from 'classnames';
import styles from '../../styles/components/schedule/events.module.scss';
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
      case 'General':
        return { baseColor: '#f4f4f4', foreColor: '#281E35', borderColor: '#e5e5e5', typeAboutColor: '#281E35' };
      case 'Lecture':
        return { baseColor: '#FF2350', foreColor: '#fff', typeAboutColor: '#FF2350' };
      case 'Keynote':
        return { baseColor: '#F2C227', foreColor: '#281E35', typeAboutColor: '#F2C227' };
      case 'Workshop':
        return { baseColor: '#2071FF', foreColor: '#fff', typeAboutColor: '#2071FF' };
      default:
        return null;
    }
  }
  /* TODO: 
  Add in switch statement for full header bar change with an object of two strings or colors returning

  */

  mapSpeakers = (speakers) => {
    return speakers['name'];
  };

  render() {
    let start = this.props.start.toLowerCase();
    let end = this.props.end.toLowerCase();
    let name = this.props.name;
    let location = this.props.location;
    let speakers = 'empty';
    if (this.props.speakers) {
      speakers = this.props.speakers.map(function (speakers) {
        return speakers['name'];
      }).join(', ');
    } else {
      speakers = 'TAW Team';
    }
    // this.mapSpeakers(this.props.speakers).join(', ')
    
    let type = this.props.type;
    let description = this.props.description;

    let eventOpen = this.state.eventOpen ? 'block' : 'none';
    let chevron = this.state.eventOpen ? scheduleChevronClosed : scheduleChevron;


    return (
      <div className={styles.schedule_block}
        onClick={this.onClick}
      >
        <div
          style={{ backgroundColor: this.eventTypeClassName(type).baseColor, borderColor: this.eventTypeClassName(type).borderColor }}
          className={classnames(styles.schedule_block__duration, 'flex flex-align-center flex-row flex-justify-between')}
        >
          <p
            style={{ color: this.eventTypeClassName(type).foreColor }}
            className={classnames(styles.duration, styles.event_header__type)}>{start} to {end}
          </p>
          <p
            style={{ color: this.eventTypeClassName(type).foreColor }}
            className={classnames(styles.event_header__type, styles.event_type)}>
            {type}
          </p>
        </div>
        <div
          className={classnames(styles.schedule_block__content)}

        >
          <div className={classnames(styles.event_spacing)}>
            <div className={classnames('flex flex-justify-between')}
            >
              <h3>{name}</h3>
              <img
                src={chevron}
              />
            </div>
            <p className={styles.location}>{speakers + ' - ' + location}</p>
            <div className={classnames(styles.event_description)} style={{ display: eventOpen }}>
              <p
                style={{ color: this.eventTypeClassName(type).typeAboutColor, fontWeight: 'bold' }}
              >
                {type}
              </p>
              <p className={classnames(styles.event_description__color)} dangerouslySetInnerHTML={{
                __html:description.childMarkdownRemark.html
              }}>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule;