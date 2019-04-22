import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ScheduleEntry from './schedule.jsx';
import classnames from 'classnames';
import Header from '../Header/index';
import styles from '../../styles/components/schedule/scheduleButtons.module.scss';
import MediaQuery from 'react-responsive';
import Sticky from 'react-sticky-el';
import VisibilitySensor from 'react-visibility-sensor';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';


export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 'friday',
      friday: true,
      saturday: false,
      sunday: false
    };
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
        this.setState({ day: 'Friday' });
      } else {
        if (this.state.sunday) {
          this.setState({ day: 'Sunday' });
        }
      }
    }
  }

  isSunday = (isVisible) => {
    if (isVisible) {
      this.setState({ sunday: true });
      this.setState({ day: 'Sunday' });
    } else {
      this.setState({ sunday: false });
      if (this.state.saturday) {
        this.setState({ saturday: true });
        this.setState({ day: 'Saturday' });
      }
    }
  }

  render() {
    configureAnchors({ offset: -185, scrollDuration: 200 });

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
      <React.Fragment>
        <div className={classnames('boundary-element', styles.boundaryElement_positioning)}></div>
        <Header pageName='schedule' />
        <div className={'container'}>
          <div>
            <Sticky
              hideOnBoundaryHit={false}
              boundaryElement=".boundary-element"
              bottomOffset={0}
              topOffset={-120}
              stickyStyle={{ transform: 'translateY(120px)', zIndex: '10', overflow: 'none' }}
            >
              <div className={'flex gridish-container--complete flex-justify-center '}>
                <MediaQuery minWidth={481}>
                  <a
                    className={classnames(fridayVisible, styles.button_schedule)}
                    href="#friday"
                  >
                    friday
                  </a>
                  <a
                    className={classnames(saturdayVisible, styles.button_schedule, styles.button_schedule__leftSpacing)}
                    href="#saturday"
                  >
                    saturday
                  </a>
                  <a
                    className={classnames(sundayVisible, styles.button_schedule, styles.button_schedule__leftSpacing)}
                    href="#sunday"
                  >
                    sunday
                  </a>
                </MediaQuery>
                <MediaQuery maxWidth={480}>
                  <a
                    className={classnames(fridayVisible, styles.button_schedule)}
                    href="#friday"
                  >
                    fri
                  </a>
                  <a
                    className={classnames(saturdayVisible, styles.button_schedule, styles.button_schedule__leftSpacing)}
                    href="#saturday"
                  >
                    sat
                  </a>
                  <a
                    className={classnames(sundayVisible, styles.button_schedule, styles.button_schedule__leftSpacing)}
                    href="#sunday"
                  >
                    sun
                  </a>
                </MediaQuery>
              </div>
            </Sticky>
          </div>


          <div className={classnames('gridish-container--complete content-Block--margin-top')}>
            <StaticQuery
              query={SCHEDULE_2018_QUERY}
              render={({ someEntries, someMoreEntries, someMoreMoreEntries }) =>

                (
                  <React.Fragment>
                    <VisibilitySensor
                      onChange={this.isFriday}
                      partialVisibility={true}
                      offset={{ top: 120 }}
                    >
                      <div>
                        <ScrollableAnchor id={'friday'}>
                          <div className={classnames('flex flex-row flex-justify-between flex-align-center', styles.date_header)}>
                            <h2 className={styles.day}>friday</h2>
                          </div>
                        </ScrollableAnchor>
                        {
                          someEntries.edges.map(event => (
                            <div key={event.node.name}>
                              <ScheduleEntry
                                name={event.node.name}
                                start={event.node.startTime}
                                end={event.node.endTime}
                                location={event.node.location}
                                speakers={event.node.speaker}
                                type={event.node.eventType}
                                description={event.node.description}
                              />
                            </div>
                          ))
                        }
                      </div>
                    </VisibilitySensor>


                    <VisibilitySensor
                      onChange={this.isSaturday}
                      partialVisibility={true}
                      offset={{ top: 120 }}
                    >
                      <div>
                        <ScrollableAnchor id={'saturday'}>
                          <div className={classnames('flex flex-row flex-justify-between flex-align-center', styles.date_header)}>
                            <h2 className={styles.day}>saturday</h2>
                          </div>
                        </ScrollableAnchor>

                        {
                          someMoreEntries.edges.map(event => (
                            <div key={event.node.name}>
                              <ScheduleEntry
                                name={event.node.name}
                                start={event.node.startTime}
                                end={event.node.endTime}
                                location={event.node.location}
                                speakers={event.node.speaker}
                                type={event.node.eventType}
                                description={event.node.description}
                              />
                            </div>
                          ))
                        }


                      </div>
                    </VisibilitySensor>


                    <VisibilitySensor
                      onChange={this.isSunday}
                      partialVisibility={true}
                      offset={{ top: 120 }}
                    >
                      <div>
                        <ScrollableAnchor id={'sunday'}>
                          <div className={classnames('flex', styles.date_header)}>
                            <h2 className={styles.day}>sunday</h2>
                          </div>
                        </ScrollableAnchor>


                        {
                          someMoreMoreEntries.edges.map(event => (
                            <div key={event.node.name}>
                              <ScheduleEntry
                                name={event.node.name}
                                start={event.node.startTime}
                                end={event.node.endTime}
                                location={event.node.location}
                                speakers={event.node.speaker}
                                type={event.node.eventType}
                                description={event.node.description}
                              />
                            </div>
                          ))
                        }
                      </div>
                    </VisibilitySensor>
                  </React.Fragment>
                )
              }
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const SCHEDULE_2018_QUERY = graphql`
query schedule2018 {
  someEntries: allContentful2018Schedule (filter: {
      startTime: {
      gt: "2018-10-18T23:59:59"
      lt:"2018-10-20T00:00:00"
    	}
    }
      , sort: {order: ASC, fields: startTime}
    ) {
    edges {
			node
      {
        name
        startTime(formatString:"LT")
        endTime(formatString:"LT")
        eventType
        location
        speaker {
          name
        }
        description
        {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
  someMoreEntries: allContentful2018Schedule (filter: {
      startTime: {
      gt: "2018-10-19T23:59:59"
      lt:"2018-10-21T00:00:00"
    	}
    }
      , sort: {order: ASC, fields: startTime}
    ) {
    edges {
			node
      {
        name
        startTime(formatString:"LT")
        endTime(formatString:"LT")
        eventType
        location
        speaker {
          name
        }
        description
        {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
  someMoreMoreEntries: allContentful2018Schedule (filter: {
      startTime: {
      gt: "2018-10-20T23:59:59"
      lt:"2018-10-22T00:00:00"
    	}
    }
      , sort: {order: ASC, fields: startTime}
    ) {
    edges {
			node
      {
        name
        startTime(formatString:"LT")
        endTime(formatString:"LT")
        eventType
        location
        speaker {
          name
        }
        description
        {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
}`;