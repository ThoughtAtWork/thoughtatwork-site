import React, { Component } from 'react';
import classnames from 'classnames';
import styles from '../../styles/components/speakers/speakerCards.module.scss';
import SpeakerModal from './SpeakerModal';

export default class SpeakerCard extends Component {
  constructor(props) {
    super(props);

    this.addModalClick = this.addModalClick.bind(this);
    this.removeModalClick = this.removeModalClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.state = {
      popupVisible: false,
    };
  }

  addModalClick() {
    this.setState({
      popupVisible: true
    });
  }

  removeModalClick() {

    this.setState({
      popupVisible: false
    });
  }

  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  render() {
    const props = this.props;
    let imageURLPrefix = 'https://thoughtatwork.cias.rit.edu/assets/graphics/2018-imagery/speaker-headshots/';
    let headShot = imageURLPrefix + props.headshot + '.jpg';
    let name = props.firstName + ' ' + props.lastName;


    if (this.state.popupVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = null;
    }


    return (
      <div
        className={classnames(styles.cardSize)}
      >
        <img className={classnames(styles.headshotContainer)}
          src={headShot}
          onClick={this.addModalClick}
        />
        <div 
          onClick={this.addModalClick}
          className={classnames(styles.speakerCard_text)}>
          <h2 className={classnames(styles.speakerCard_text__spacing, styles.speakerCard_text__hover_color)}>
            {name}
          </h2>
          <p className={classnames(styles.speakerCard_text__hover_color)}>{props.job}</p>
        </div>

        <div ref={node => { this.node = node; }}>
          {this.state.popupVisible && (
            <div>
              <div className={classnames(styles.modal_container__inner, 'gridish-container')}>
                <div
                  onClick={this.removeModalClick}
                  className={classnames(styles.modal__backgroundChange)}></div>
                <div className={classnames(styles.modal_container__outer, 'dotGrid-background')}>
                  <SpeakerModal name={name} job={props.job} headshot={headShot} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
