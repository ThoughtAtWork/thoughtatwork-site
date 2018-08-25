import React, { Component } from 'react';
import Link from 'gatsby-link';
import styles from '../../styles/nav.module.scss';
import classnames from 'classnames';
import navLogo from '../../assets/images/navLogo.svg';


export class MobileNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: this.props.menuOpen
    };
  }

  openMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {

    let menuActive;
    let mobileNav = this.state.menuOpen ? styles.mobileNav_Open : styles.mobileNav_Closed;
    if (this.state.menuOpen) {
      menuActive = 'is-active';
      document.body.style.overflow = 'hidden';
    } else {
      menuActive = '';
      document.body.style.overflow = null;
    }

    return (
      <div>
        <div className={classnames(scroll)}>
          <nav className={classnames(styles.navContainer)}>
            <div className={classnames(styles.navElements, 'flex-justify-between')}>
              <Link
                to="/Home"
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
          <div className={classnames(mobileNav)}>
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
          </div>
        </div>
      </div>);
  }
}

export default MobileNavigation;