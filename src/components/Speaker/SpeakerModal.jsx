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
        <img className={classnames('gridish-grid__col--xsmall--2 gridish-grid__col--small--3', styles.headshotContainer)}
          src={props.headshot}
        />
        <div>
          <h1 className={classnames('gridish-grid__col--xsmall--2 gridish-grid__col--small--2')}>{props.name}</h1>
          <p className={classnames('gridish-grid__col--xsmall--2 gridish-grid__col--small--2 gridish-grid__height--small--2')}>{props.job}</p>
          <a className={classnames('gridish-grid__col--xsmall--2 gridish-grid__col--small--2')}>{props.links}</a>
        </div>
      </div>
    );
  }
}
