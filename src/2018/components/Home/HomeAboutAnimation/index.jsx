import React from 'react';
import Lottie from 'react-lottie';
import animationData from './animationData.json';
import classnames from 'classnames';
import styles from '../../../styles/components/home/homeAbout.module.scss';


class HomeAboutAnimation extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false, isClickToPauseDisabled: true };
  }

  onClick = (clickEvent) => {
    clickEvent.stopPropagation();
  }



  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        scaleMode: 'noScale',
        isClickToPauseDisabled: true,
        clearCanvas: false,
        progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
        hideOnTransparent: true, //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
        className: 'some-css-class-name'
      }
    };

    return <div className={classnames(styles.image, 'gridish-container--complete gridish-grid')}>
      <Lottie options={defaultOptions}
        isClickToPauseDisabled={true}
      />
    </div>;
  }
}

export default HomeAboutAnimation;