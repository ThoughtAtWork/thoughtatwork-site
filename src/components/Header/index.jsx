import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from '../../styles/components/header/header.module.scss';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className={classnames(
        'gridish-container--complete',
        'gridish-grid',
        'container')}
      >
        <h1 className={classnames(
          'gridish-grid__col--small--3'
          , styles.padding__bottom
        )}>
          {this.props.pageName}
        </h1>
      </div>
    );
  }
}

index.propTypes = {
  pageName: PropTypes.string.isRequired
};