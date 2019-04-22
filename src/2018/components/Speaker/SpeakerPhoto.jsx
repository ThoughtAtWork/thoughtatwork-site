import React, { Component } from 'react';
import classnames from 'classnames';
import styles from '../../styles/components/speakers/speakerPhoto.module.scss';
import Img from 'gatsby-image';

export default class SpeakerPhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const props = this.props;

    return (
      <div>
        <Img className={classnames(styles.headshotContainer)} fluid={props.headshot}> </Img>
        <h2 className={classnames(styles.speakerCard_text__spacing)}>
          {props.name}
        </h2>
        <p>{props.job}</p>
      </div>
    );
  }
}
