import React from 'react';
import Link from 'gatsby-link';
import styles from '../styles/nav.module.scss';
import classnames from 'classnames';

class Navigation extends React.Component {

  render() {
    return (
      <div>
        <header className={styles.header}>
          <nav className={styles.container}>
            <ul className={styles.list}>
              <li className={classnames(styles.list, styles.item)}>
                <Link to="/index" activeStyle={{
                  color: 'black'
                }}>Home</Link>

              </li>
              <li className={classnames(styles.list, styles.item)}>
                <Link to="/speakers" activeStyle={{
                  color: 'black'
                }}>Speakers</Link>
              </li>
              <li className={classnames(styles.list, styles.item)}>
                <Link to="/schedule" activeStyle={{
                  color: 'black'
                }}>Schedule</Link>

              </li>
              <li className={classnames(styles.list, styles.item)}>
                <Link to="/info-gethere" activeStyle={{
                  color: 'black'
                }}>Info</Link>
              </li>
              <li className={classnames(styles.list, styles.item)}>
                <Link to="/contact" activeStyle={{
                  color: 'black'
                }}>Contact</Link>

              </li>
              <li className={classnames(styles.list, styles.item)}>
                <Link to="/about" activeStyle={{
                  color: 'black'
                }}>About</Link>

              </li>
              <li className={classnames(styles.list, styles.item)}>
                <Link to="/register" activeStyle={{
                  color: 'black'
                }}>Register</Link>

              </li>
            </ul>

            <div className={styles.mobile_icons}>

              <div className={styles.menu}>
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
                <Link to="/about" activeStyle={{
                  color: 'black'
                }} className={styles.overlay_content_link}>ABOUT</Link>
                <Link to="/schedule" activeStyle={{
                  color: 'black'
                }} className={styles.overlay_content_link}>SCHEDULE</Link>
                <Link to="/contact" activeStyle={{
                  color: 'black'
                }} className={styles.overlay_content_link}>CONTACT</Link>
                <Link to="/register" activeStyle={{
                  color: 'black'
                }} className={styles.overlay_content_link}>REGISTER</Link>

                <div className={styles.social}>
                  <a className={styles.social_link} href="https://facebook.com/ThoughtAtWork">
                    <img className={styles.social_image} src="assets/graphics/facebook.svg" />
                  </a>
                  <a className={styles.social_link} href="https://twitter.com/taw_rit">
                    <img className={styles.social_image} src="assets/graphics/twitter.svg" />
                  </a>
                  <a className={styles.social_link} href="https://instagram.com/taw_rit">
                    <img className={styles.social_image} src="assets/graphics/instagram.svg" />
                  </a>
                </div>

                <p className={styles.overlay_text}><em>Special Thanks</em> to Lorraine Justice,
										Josh Owen, Bruce Leonard, Adam Smith</p>
                <br />
                <p className={styles.overlay_text}>&copy;2017 Thought At Work. All rights reserved.</p>
              </div>

            </div>

          </nav>
        </header>
      </div>

    );
  }

}

export default Navigation;