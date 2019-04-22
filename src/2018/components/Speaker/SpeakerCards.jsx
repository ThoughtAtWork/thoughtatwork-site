import React, { Component } from 'react';
import classnames from 'classnames';
import styles from '../../styles/components/speakers/speakerCards.module.scss';
import SpeakerModal from './SpeakerModal';
import Img from 'gatsby-image';

export default class SpeakerCard extends Component {
  constructor(props) {
    super(props);

    this.addModalClick = this.addModalClick.bind(this);
    this.removeModalClick = this.removeModalClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.escFunction = this.escFunction.bind(this);

    this.state = {
      popupVisible: false,
    };
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.removeModalClick();
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }
  addModalClick() {
    this.setState({
      popupVisible: true
    });
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.getElementsByClassName('speaker_modal__background')[0].style.backgroundColor = 'rgba(40, 30, 53, 0.50)';
    document.getElementsByClassName('speaker_modal__background')[0].style.zIndex = '15';
  }
  removeModalClick() {
    console.log('removed');
    this.setState({
      popupVisible: false
    });
    document.body.style.overflow = 'unset';
    document.body.style.position = 'static';
    document.body.style.width = 'auto';
    document.body.style.height = 'auto';
    document.getElementsByClassName('speaker_modal__background')[0].style.backgroundColor = 'transparent';
    document.getElementsByClassName('speaker_modal__background')[0].style.zIndex = '0';
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

    return (
      <div>
        <div
          onClick={this.addModalClick}
          className={classnames(styles.cardSize)}
        >
          <Img className={classnames(styles.headshotContainer)}
            fluid={props.headshot}
            onClick={this.addModalClick}
          />
          <div
            onClick={this.addModalClick}
            className={classnames(styles.speakerCard_text)}>
            <h2 className={classnames(styles.speakerCard_text__spacing, styles.speakerCard_text__hover_color)}>
              {props.name}
            </h2>
            <p className={classnames(styles.speakerCard_text__hover_color)}>{props.job}</p>
          </div>
        </div>
        <div>
          {this.state.popupVisible && (
            <div>
              <div className={classnames(styles.modal_container__inner, 'gridish-container')}>
                <div
                  onClick={this.removeModalClick}
                  className={classnames(styles.modal__backgroundChange)}>

                </div>
                <div className={classnames(styles.modal_container__outer)}>
                  <div className={classnames(styles.navContainer)}>
                    <div className={classnames(styles.navContainer_content, 'flex flex-align-center flex-justify-between flex-row flex-align-center')}>
                      <h2 className={classnames(styles.speakerInfo_h2__alteration)}>speaker info</h2>
                      <button
                        className={classnames(
                          'hamburger hamburger--elastic is-active',
                        )}
                        type='button'
                        aria-label='Menu'
                        aria-controls='navigation'
                        onClick={this.removeModalClick}
                      >
                        <span className='hamburger-box'>
                          <span className={classnames('hamburger-inner')}></span>
                        </span>
                      </button>
                    </div>
                  </div>
                  <SpeakerModal links={props.webpage} name={props.name} bio={props.bio} job={props.job} headshot={props.headshot} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
