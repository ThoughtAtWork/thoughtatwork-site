import React, { Component } from 'react';
import classnames from 'classnames';
import styles from '../../styles/components/speakers/speakerModal.module.scss';

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
            <h1 className={classnames(styles.name)}>{props.name}</h1>
            <p className={classnames(styles.job)}>{props.job}</p>
            <a href={props.links} className={classnames()}>Personal Site</a>
          </div>
          <img className={classnames('flex-column', styles.headshotContainer)}
            src={props.headshot}
          />
        </div>

      </div>
    );
  }
}
