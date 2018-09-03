import React, { Component } from 'react';
import classnames from 'classnames';
import Link from 'gatsby-link';
import navLogo from '../../assets/images/navLogo.svg';
import MediaQuery from 'react-responsive';
import styles from '../../styles/nav.module.scss';

export class DesktopNavigation extends Component {
  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={880}>
          <nav className={classnames(styles.navContainer)}>
            <div className={classnames(styles.navElements, 'flex flex-justify gridish-container--complete')}>
              <Link
                to="/Home"
                className={classnames(styles.logo)}
              >
                <img
                  className={classnames(styles.navElement)}
                  src={navLogo}
                />
              </Link>
              <div className={classnames('flex flex-align-center')}>
                <Link
                  to="/Home"
                  className={classnames(styles.link, styles.navElement)}
                  activeStyle={{
                    color: '#FF2350'
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/speakers"
                  className={classnames(styles.link, styles.navElement)}
                  activeStyle={{
                    color: '#FF2350'
                  }}
                >
                  Speakers
                </Link>
                <Link
                  to="/schedule"
                  className={classnames(styles.link, styles.navElement)}
                  activeStyle={{
                    color: '#FF2350'
                  }}
                >
                  Schedule
                </Link>

                <Link
                  to="/info-gethere"
                  className={classnames(styles.link, styles.navElement)}
                  activeStyle={{
                    color: '#FF2350'
                  }}
                >
                  Info
                </Link>
                <button className={classnames(styles.desktopRegisterButton)}>
                  <Link
                    to="/register"
                    className={classnames(styles.registerButtonText)}
                  >
                    get tickets
                  </Link>
                </button>
              </div>
            </div>
          </nav>
        </MediaQuery>
      </div>
    );
  }
}

export default DesktopNavigation;
