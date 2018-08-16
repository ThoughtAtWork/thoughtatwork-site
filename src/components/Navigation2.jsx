import React, { Component } from 'react';
import Link from 'gatsby-link';
import styles from '../styles/nav2.module.scss';
import classnames from 'classnames';
import navLogo from '../assets/images/navLogo.svg';

export class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }


  openMenu = () => {

  }

  render() {
    return (
      <div>
        <nav className={classnames(styles.navContainer, 'flex')}>
          <img
            className={classnames(styles.logo)}
            src={navLogo}
          />
          <Link
            to="/index"
className={classnames(styles.link)}
            activeStyle={{
              color: '#FF2350'
            }}
          >
            Home
          </Link>
          <Link
            to="/speakers"
            className={classnames(styles.link)}
            activeStyle={{
              color: '#FF2350'
            }}
          >
            Speakers
          </Link>
          <Link
            to="/schedule"
            className={classnames(styles.link)}
            activeStyle={{
              color: '#FF2350'
            }}
          >
            Schedule
          </Link>

          <Link
            to="/info-gethere"
            className={classnames(styles.link)}
            activeStyle={{
              color: '#FF2350'
            }}
          >
            Info
          </Link>
          <Link
            to="/register"
            className={classnames(styles.link)}
            activeStyle={{
              color: '#FF2350'
            }}
          >
            Register
          </Link>
          <button className={classnames(styles.registerButton)}>
            <Link
              to="/register"
              className={classnames(styles.registerButtonText)}
            >
              get tickets
            </Link>
          </button>

        </nav>

        {/* <nav className={classnames(styles.container)}>
          <div className={styles.mobile_icons}>

            <div
              className={styles.menu}
              onClick={this.openMenu()}
            >
              <span className={styles.toggle}>☰</span>
            </div>

            <div className={styles.logo}>

              <Link to="/index">
                <img className={styles.brand} src="assets/graphics/brand.svg" />
              </Link>
            </div>

            <div className={styles.register}>
              <Link to="/register"></Link>
              <img className={styles.ticket} src="assets/graphics/icons/ticket.svg" />
            </div>

          </div>

          <div id="styles.mobile" className={styles.overlay}>

            <Link to="javascript:void(0)" className={styles.overlay_closebtn}>&times;</Link>

            <div className={styles.overlay_content}>

              <Link to="/index" activeStyle={{
                color: 'black'
              }} className={styles.overlay_content_link}>HOME</Link>
              <Link to="/speakers" activeStyle={{
                color: 'black'
              }} className={styles.overlay_content_link}>SPEAKERS</Link>
              <Link to="/info-gethere" activeStyle={{
                color: 'black'
              }} className={styles.overlay_content_link}>INFO</Link>
              <Link to="/schedule" activeStyle={{
                color: 'black'
              }} className={styles.overlay_content_link}>SCHEDULE</Link>
              <Link to="/register" activeStyle={{
                color: 'black'
              }} className={styles.overlay_content_link}>REGISTER</Link>


              <p className={styles.overlay_text}><em>Special Thanks</em> to Lorraine Justice,
										Josh Owen, Bruce Leonard, Adam Smith</p>
              <br />
              <p className={styles.overlay_text}>&copy;2017 Thought At Work. All rights reserved.</p>
            </div>

          </div>

        </nav> */}
      </div >
    );
  }
}

export default Navigation;