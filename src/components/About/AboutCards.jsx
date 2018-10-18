import React, { Component } from 'react';
import classnames from 'classnames';
import styles from '../../styles/components/about/aboutCards.module.scss';
import outsideLinkLogo from '../../assets/images/outsideLinkLogo.svg';

export default class SpeakerCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const props = this.props;
    let imageURLPrefix = 'https://thoughtatwork.cias.rit.edu/assets/graphics/2018-imagery/about-photos/';
    let name = props.name;
    let headShot = imageURLPrefix + name.split(' ').join('_') + '.jpg';

    return (
      <div>
        <div
          className={classnames(styles.cardSize)}
        >
          <div style={{ backgroundImage: `url(${headShot})` }} className={classnames(styles.headshotContainer)}>
            {/* <div style={{ backgroundImage: `url(${headShot})` }} className={classnames(styles.headShotImage)}>

            </div> */}
          </div>
          <div
            className={classnames(styles.speakerCard_text)}>
            <h2 className={classnames(styles.speakerCard_text__spacing)}>
              {name}
            </h2>
            <p className={classnames(styles.aboutTeam__spacing)}><strong>{props.team}</strong></p>
            <p className={classnames(styles.aboutMajorYear__spacing)}>{props.major + ' - ' + props.year}</p>

            {props.link && (
              <a href={props.link} target="_blank">
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
