import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './Splash.json';
import classnames from 'classnames';
import styles from '../../../styles/components/home/homeSplash.module.scss';


class SplashAnimation extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false, isClickToPauseDisabled: true };
  }

  onClick = (clickEvent) => {
    clickEvent.stopPropagation();
  }  

  

  render() {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        scaleMode: 'noScale',
        isClickToPauseDisabled: true,
        clearCanvas: false,
        progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
        hideOnTransparent: true, //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
        className: 'some-css-class-name'
      }
    };

    return <div className={classnames(styles.splashSizing, styles.splashSpacing, 'gridish-container--complete gridish-grid')}>
      <Lottie options={defaultOptions}
        isClickToPauseDisabled={true}
      />
    </div>;
  }
}

export default SplashAnimation;