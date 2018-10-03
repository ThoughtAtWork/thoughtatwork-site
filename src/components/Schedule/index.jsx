import React from 'react';
import Scheduled from './schedule.jsx';
import classnames from 'classnames';
import data from '../../assets/schedule.json';
import Header from '../Header/index';
import styles from '../../styles/components/schedule/scheduleMain.module.scss';
import MediaQuery from 'react-responsive';
import Sticky from 'react-sticky-el';
import VisibilitySensor from 'react-visibility-sensor';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: this.props.day,
      friday: this.props.friday,
      saturday: this.props.friday,
      sunday: this.props.friday
    };
  }

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

  isFriday = (isVisible) => {
    if (isVisible) {
      this.setState({ friday: true });
      this.setState({ day: 'Friday' });
    } else {
      this.setState({ friday: false });
      if (this.state.saturday) {
        this.setState({ saturday: true });
        this.setState({ day: 'Saturday' });
      } else {
        this.setState({ sunday: true });
        this.setState({ day: 'Sunday' });
      }
    }
  }


  isSaturday = (isVisible) => {
    if (isVisible) {
      this.setState({ saturday: true });
      this.setState({ day: 'Saturday' });
    } else {
      this.setState({ saturday: false });
      if (this.state.friday) {
        this.setState({ friday: true });
        this.setState({ day: 'Friday' });
      } else {
        this.setState({ sunday: true });
        this.setState({ day: 'Sunday' });
      }
    }
  }

  isSunday = (isVisible) => {
    if (isVisible) {
      this.setState({ sunday: true });
      this.setState({ day: 'Sunday' });
    } else {
      this.setState({ sunday: false });
      if (this.state.saturday)  {
        this.setState({ saturday: true });
        this.setState({ day: 'Saturday' });
      } else {
        this.setState({ sunday: true });
      }        
    }
  }



  render() {
    let fridayVisible = '';
    let saturdayVisible = '';
    let sundayVisible = '';
    switch (this.state.day) {
      case 'Friday':
        fridayVisible = 'button_schedule__active';
        saturdayVisible = '';
        sundayVisible = '';
        break;
      case 'Saturday':
        fridayVisible = '';
        saturdayVisible = 'button_schedule__active';
        sundayVisible = '';
        break;
      case 'Sunday':
        fridayVisible = '';
        saturdayVisible = '';
        sundayVisible = 'button_schedule__active';
        break;
      default:
    }

    return (
      <div>
        <div className={classnames('boundary-element', styles.boundaryElement_positioning)}></div>
        <Header pageName='schedule' />
        <div className={'container'}>
          <div className={''} style={{ overflow: 'scroll' }}>
            <Sticky
              hideOnBoundaryHit={false}
              boundaryElement=".boundary-element"
              bottomOffset={0}
              topOffset={-120}
              stickyStyle={{ transform: 'translateY(120px)' }}
            >
              <div className={'flex gridish-container--complete flex-justify-center '}>
                <MediaQuery minWidth={481}>
                  <a className={classnames(fridayVisible, styles.button_schedule)} href="#friday">friday</a>
                  <a className={classnames(saturdayVisible, styles.button_schedule, styles.button_schedule__leftSpacing)} href="#saturday">saturday</a>
                  <a className={classnames(sundayVisible, styles.button_schedule, styles.button_schedule__leftSpacing)} href="#sunday">sunday</a>
                </MediaQuery>
                <MediaQuery maxWidth={480}>
                  <a className={classnames(fridayVisible, styles.button_schedule)} href="#friday">fri</a>
                  <a className={classnames(saturdayVisible, styles.button_schedule, styles.button_schedule__leftSpacing)} href="#saturday">sat</a>
                  <a className={classnames(sundayVisible, styles.button_schedule, styles.button_schedule__leftSpacing)} href="#sunday">sun</a>
                </MediaQuery>
              </div>
            </Sticky>
          </div>


          <div className={classnames('event-container', styles.container_center)}>

            <VisibilitySensor
              onChange={this.isFriday}
              partialVisibility={true}
              offset={{ top: 120 }}
            >
              <h2 id="friday" className={styles.date_header} style={{ height: '300px' }}>friday</h2>
            </VisibilitySensor>
            {this.initializeSchedule(data.friday)}


            <VisibilitySensor
              onChange={this.isSaturday}
              partialVisibility={true}
              offset={{ top: 120 }}
            >
              <h2 id="saturday" className={styles.date_header} style={{ height: '300px' }}>saturday</h2>
            </VisibilitySensor>
            {this.initializeSchedule(data.saturday)}


            <VisibilitySensor
              onChange={this.isSunday}
              partialVisibility={true}
              offset={{ top: 120 }}
            >
              <h2 id="sunday" className={styles.date_header} style={{ height: '300px' }}>sunday</h2>
            </VisibilitySensor>
            {this.initializeSchedule(data.sunday)}

          </div>
        </div>
      </div>
    );
  }
}

export default Schedule;
