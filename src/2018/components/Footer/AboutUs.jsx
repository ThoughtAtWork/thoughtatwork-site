import React, { Component } from 'react';
import classnames from 'classnames';
import styles from '../../styles/components/footer/footer.module.scss';
import { Link } from 'gatsby';

export default class AboutUs extends Component {
  render() {
    return (
      <div className={classnames('container gridish-container gridish-container--complete gridish-grid')}>
        <p className={classnames('gridish-grid__col--small--4 gridish-grid__col--xsmall--4 gridish-grid__height--small--28 gridish-grid__height--xsmall--22', styles.footer_text__maxWidth, styles.footer_text__bottomMargin)}> <strong>Thought At Work</strong> started as a small Industrial Design conference in 2002 but
         now caters to over 400 designers with speakers and attendees from various fields in design. Organized exclusively
         by students at RIT, the conference strives to function as a tool for young designers to advance their careers
         and thrive. View more &nbsp;
        
        <Link
          to="/2018/about"
          className={classnames(styles.link)}
        >about us here </Link></p>
        <div className={classnames('gridish-grid__col--small--2 gridish-grid__height--small--24 gridish-grid__height--xsmall--2')}></div>
        <div className={classnames('gridish-grid__col--small--2 gridish-grid__height--small--14 gridish-grid__height--xsmall--13')}>
          <Link
            to="/2018/contact"
          >
            <strong>Contact Us</strong>
          </Link>
          <br></br>
          <br></br>
          <Link
            to="/2018/codeOfConduct"
          >
            <strong>Code of Conduct</strong>
          </Link>
        </div>
        <div className={classnames('gridish-grid__col--small--2 gridish-grid__height--small--14 gridish-grid__height--xsmall--13', styles.footer_text__bottomMargin)}>
          <a href="https://www.instagram.com/taw_rit/">
            Instagram
          </a>
          <br></br>
          <br></br>
          <a href="https://www.facebook.com/events/199495987362796/">
            Facebook
          </a>
        </div>
        <p className={classnames('gridish-grid__col--small--4', styles.footer_text__maxWidth)}> Special thanks to Josh Owen, Bruce Leonard, Adam Smith, and Carol Rouhana.</p>

        <div className={classnames('gridish-grid__height--small--15 gridish-grid__height--xsmall--14')}>
        </div>
      </div>
    );
  }
}
