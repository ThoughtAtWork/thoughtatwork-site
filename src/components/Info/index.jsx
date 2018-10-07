import React from 'react';
import MediaQuery from 'react-responsive';
import styles from '../../styles/components/info/InfoNavigation.module.scss';
import classnames from 'classnames';
import Header from '../Header';
import InfoGetHere from '../InfoGetHere';
import InfoWhereToStay from '../InfoWhereToStay';
import InfoWelcome from '../InfoWelcome';

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directionInfo: true,
      hotelInfo: false,
      otherInfo: false,
    };
    this.setActiveClass = this.setActiveClass.bind(this);
  }

  setActiveClass(currClass) {
    switch (currClass) {
      case 'Directions': {
        if (!this.state.directionInfo) {
          this.setState({ directionInfo: true, hotelInfo: false, otherInfo: false });
        }
      }
        break;

      case 'Hotel': {
        if (!this.state.hotelInfo) {
          this.setState({ directionInfo: false, hotelInfo: true, otherInfo: false });
        }
      }
        break;

      case 'Other':
      default: {
        if (!this.state.otherInfo) {
          this.setState({ directionInfo: false, hotelInfo: false, otherInfo: true });
        }
      }
        break;
    }
  }

  render() {
    return (
      <div>
        <div className={classnames('boundary-element', styles.boundaryElement_positioning)}></div>
        <Header pageName='info' />
        <div className={'flex flex-justify-around gridish-container'}>
          <MediaQuery minWidth={641}>
            <a
              className={this.state.directionInfo ? classnames(styles.infoButton, styles.active) : classnames(styles.infoButton)}
              onClick={() => this.setActiveClass('Directions')}>
              directions
            </a>
            <a
              className={this.state.hotelInfo ? classnames(styles.infoButton, styles.active, styles.infoButton__leftSpacing) : classnames(styles.infoButton, styles.infoButton__leftSpacing)}
              onClick={() => this.setActiveClass('Hotel')}>
              hotels
            </a>
            <a
              className={this.state.otherInfo ? classnames(styles.infoButton, styles.active, styles.infoButton__leftSpacing) : classnames(styles.infoButton, styles.infoButton__leftSpacing)}
              onClick={() => this.setActiveClass('Other')}>
              everything else
            </a>
          </MediaQuery>
          <MediaQuery maxWidth={640}>
            <div className={classnames('gridish-container')}>
              <div className={classnames('flex flex-row flex-justify-around')}>
                <a
                  className={this.state.directionInfo ? classnames(styles.infoButton, styles.active, styles.infoButtons__halfWidth) : classnames(styles.infoButton, styles.infoButtons__halfWidth)}
                  onClick={() => this.setActiveClass('Directions')}>
                  directions
                </a>
                <a
                  className={this.state.hotelInfo ? classnames(styles.infoButton, styles.active, styles.infoButtons__halfWidth, styles.infoButton__leftSpacing) : classnames(styles.infoButton, styles.infoButton__leftSpacing, styles.infoButtons__halfWidth)}
                  onClick={() => this.setActiveClass('Hotel')}>
                  hotels
                </a>
              </div>
              <a
                className={this.state.otherInfo ? classnames(styles.infoButton, styles.active, styles.infoButtons__fullWidth) : classnames(styles.infoButton, styles.infoButtons__fullWidth)}
                onClick={() => this.setActiveClass('Other')}>
                everything else
              </a>
            </div>
          </MediaQuery>
        </div>

        <div className={'content-Block--margin-top'}></div>
        {this.state.directionInfo && <InfoGetHere />}
        {this.state.hotelInfo && <InfoWhereToStay />}
        {this.state.otherInfo && <InfoWelcome />}
      </div>
    );
  }
}

export default index;