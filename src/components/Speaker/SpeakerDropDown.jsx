import React, { Component } from 'react';
import styles from '../../styles/components/speakers/SpeakerDropDown.module.scss'
import { Link } from 'react-router-dom';

export default class SpeakerDropDown extends Component {


  render() {
    return (
      <div className={styles.dropDown_div}>
        <button className={styles.dropDown_button}>filters &#10597;</button>
        <div className={styles.dropDown_content}>
          <Link to="\speakers\" className={styles.dropDown_link}>Industrial Design</Link>
          <Link to="\speakers\" className={styles.dropDown_link}>UI / UX</Link>
          <Link to="\speakers\" className={styles.dropDown_link}>Web Development</Link>
          <Link to="\speakers\" className={styles.dropDown_link}>Graphic Design</Link>
          <Link to="\speakers\" className={styles.dropDown_link}>Visual Design</Link>
        </div>
      </div>
    );
  };
};