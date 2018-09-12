import React, { Component } from 'react';
import styles from '../../styles/components/buttons/homeSpeakerAction.module.scss';
import classnames from 'classnames';

export default class SpeakerActionButton extends Component {
  render() {
    
    return (
      <button className={classnames(styles.actionButton)}>
        <p className={classnames(styles.actionButton__text)}>view all speakers</p>
      </button>
    );
  };
};