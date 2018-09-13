import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className={classnames(
        'gridish-grid-complete',
        'gridish-grid',
        'container')}
      >
        <h1 className={classnames(
          'gridish-grid__col--small--3')}>
          {this.props.pageName}
        </h1>
      </div>
    );
  }
}

index.propTypes = {
  pageName: PropTypes.string.isRequired
};