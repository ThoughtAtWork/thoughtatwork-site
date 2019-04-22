import React, { Component } from 'react';
import classnames from 'classnames';
import styles from '../../styles/components/speakers/speakerModal.module.scss';
import outsideLinkLogo from '../../assets/images/outsideLinkLogo.svg';
import MediaQuery from 'react-responsive';
import Img from 'gatsby-image';

export default class SpeakerModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const props = this.props;
    return (

      <div className={classnames(styles.container, 'gridish-grid')}>
        <div className={classnames(styles.modalNav__spacer)}></div>
        <div className={('flex flex-justify-between')}>
          <div className={('flex flex-column', styles.textColumn)}>
            <MediaQuery maxWidth={480}>
              <Img className={classnames('flex-column', styles.headshotContainer)}
                fluid={props.headshot}
              />
            </MediaQuery>
            <h1 className={classnames(styles.name)}>{props.name}</h1>
            <p className={classnames(styles.job)}>{props.job}</p>
            {props.links && (
              <a href={props.links} target="_blank" className={classnames()}>
                <img
                  className={classnames(styles.outsideLinkLogo)}
                  src={outsideLinkLogo}
                />
                website
              </a>
            )}
          </div>
          <MediaQuery minWidth={481}>
            <Img className={classnames('flex-column', styles.headshotContainer)}
              fluid={props.headshot}
            />
          </MediaQuery>
        </div>
        <p
          className={classnames(styles.bio, 'flex-row')}
        >
          {props.bio}
        </p>
      </div>
    );
  }
}
