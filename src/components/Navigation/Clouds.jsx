import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './data.json';
import classnames from 'classnames';
import styles from '../../styles/nav.module.scss';

class Clouds extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        scaleMode: 'noScale',
        clearCanvas: false,
        progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
        hideOnTransparent: true, //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
        className: 'some-css-class-name'
      }
    };

    return <div className={classnames(styles.clouds)}>
      <Lottie options={defaultOptions}
        width={880}
        isClickToPauseDisabled={true}
      />
    </div>;
  }
}

export default Clouds;