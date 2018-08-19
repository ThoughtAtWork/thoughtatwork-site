import React, { Component } from 'react';
import Link from 'gatsby-link';
import styles from '../styles/nav2.module.scss';
import classnames from 'classnames';
import navLogo from '../assets/images/navLogo.svg';
import MediaQuery from 'react-responsive';
import DesktopNavigation from './Navigation/DesktopNavigation';


export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  openMenu = () => {
    // start cerating open menu look
    // create trigger for that in here and
    // how it reverberates across other parts 
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    let menuActive;
    let scroll;
    if (this.state.menuOpen) {
      menuActive = 'is-active';
      scroll = 'no-scroll';
    } else { menuActive, scroll = ''; }
    return (
      <div>
        <DesktopNavigation/>
        <MediaQuery maxWidth={880}>
          <div className={classnames(scroll)}>
            <nav className={classnames(styles.navContainer)}>
              <div className={classnames(styles.navElements, 'flex-justify-between')}>
                <Link
                  to="/index"
                >
                  <img
                    className={classnames(styles.logo, styles.navElement)}
                    src={navLogo}
                  />
                </Link>
                <button className={classnames(styles.mobileRegisterButton)}>
                  <Link
                    to="/register"
                    className={classnames(styles.registerButtonText)}
                  >
                    get tickets
                  </Link>
                </button>

                <button
                  className={classnames(
                    styles.menu,
                    styles.navElement,
                    'hamburger hamburger--elastic',
                    menuActive,
                  )}
                  type='button'
                  aria-label='Menu'
                  aria-controls='navigation'
                  onClick={this.openMenu.bind(this)}
                >
                  <span className='hamburger-box'>
                    <span className='hamburger-inner'></span>
                  </span>
                </button>
              </div>
            </nav>
            <div className={classnames(styles.mobilePages)}>
              <Link
                to="/index"
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
            </div>
          </div>
        </MediaQuery>
      </div>);
  }
}

export default Navigation;