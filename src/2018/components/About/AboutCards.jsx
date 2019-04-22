import React, { Component } from 'react';
import classnames from 'classnames';
import styles from '../../styles/components/about/aboutCards.module.scss';
import outsideLinkLogo from '../../assets/images/outsideLinkLogo.svg';
import Img from 'gatsby-image';

export default class SpeakerCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const props = this.props;

    return (
      <div>
        <div
          className={classnames(styles.cardSize)}
        >
          <Img 
            fluid={props.headshot} className={classnames(styles.headshotContainer)}>
          </Img>
          <p>{props.order}</p>
          <div
            className={classnames(styles.speakerCard_text)}>
            <h2 className={classnames(styles.speakerCard_text__spacing)}>
              {props.name}
            </h2>
            <p className={classnames(styles.aboutTeam__spacing)}><strong>{props.role}</strong></p>
            <p className={classnames(styles.aboutMajorYear__spacing)}>{props.major + ' - ' + props.year}</p>

            {props.webpage && (
              <a href={props.webpage} target="_blank">
                <img
                  className={classnames(styles.outsideLinkLogo)}
                  src={outsideLinkLogo}
                />
                website
              </a>
            )}

          </div>
        </div>
      </div>
    );
  }
}
