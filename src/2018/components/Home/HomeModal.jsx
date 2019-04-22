import React, { Component } from 'react';
import classnames from 'classnames';
import styles from '../../styles/components/home/homeModal.module.scss';
import modal_closeButton from '../../assets/homeModal/modal_closeButton.svg';
import modal_coverImage from '../../assets/homeModal/modal_coverImage.svg';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const ModalTitle = styled('h3')`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: normal;
  letter-spacing: 0.01em;
  text-transform: none;
`;

const modal__Image = css`
  width: 74%;
  padding-top: 24px;
  padding-bottom: 48px;
  @media (min-width: 480px) {
    padding-bottom: 32px;
  }
  `;

const ModalContent = styled('p')`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.02em;
  a {
    font-size: 16px;
    cursor:pointer;
  }
`;

const ModalButton__Text = styled('p')`
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 25px;
letter-spacing: 0.03em;
`;
const modal_closeButton__size = css`
  width: 24px;
`;

export default class SpeakerCard extends Component {
  constructor(props) {
    super(props);

    this.addModalClick = this.addModalClick.bind(this);
    this.removeModalClick = this.removeModalClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.escFunction = this.escFunction.bind(this);

    this.state = {
      popupVisible: true,
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
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
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
    document.getElementsByClassName('home_modal__background')[0].style.backgroundColor = 'transparent';
    document.getElementsByClassName('home_modal__background')[0].style.zIndex = '0';
  }

  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClick();
  }

  render() {
    return (
      <div className='home_modal__background'>
        <div>
          {this.state.popupVisible && (
            <div className={classnames(styles.modal_container__inner, 'gridish-container')}>
              <div className={classnames(styles.modal_container__outer)}>
                <div className={classnames(styles.navContainer_content, 'flex flex-justify-end')}>
                  <button
                    className={classnames(
                      'hamburger hamburger--elastic is-active',
                    )}
                    type='button'
                    aria-label='Menu'
                    aria-controls='navigation'
                  >
                    <img css={modal_closeButton__size} src={modal_closeButton} onClick={this.removeModalClick}></img>
                  </button>
                </div>
                <div className={classnames('gridish-grid')}>
                  <div className={classnames(styles.innerModalContent__Margin)}>
                    <div className={('flex flex-justify-start')}>
                      <ModalTitle>Get Ready for Thought At Work!</ModalTitle>
                    </div>
                    <img src={modal_coverImage} css={modal__Image} />
                    <div
                      className={classnames('flex-row')}
                    >
                      <ModalContent>
                        Thought at Work Conference 2019 is in the works. Stay tuned for more events and updates!
                      </ModalContent>
                      <br></br>
                      <ModalContent>
                        Interested in volunteering? Thought at Work meets every Sunday at 3pm in <a href="https://goo.gl/maps/3rDy8BZxKQV8gNzKA">Booth 4426</a>.
                      </ModalContent>
                    </div>
                    <div
                      onClick={this.removeModalClick}
                      className={classnames(styles.modal_button__size, styles.modal_button, 'flex flex-justify-center flex-align-center')}
                    >
                      <ModalButton__Text>Explore last year's site</ModalButton__Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
