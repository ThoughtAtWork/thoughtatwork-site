import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from '../../styles/components/header/header.module.scss';
import MediaQuery from 'react-responsive';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const graphicsURLPrefix = 'https://thoughtatwork.cias.rit.edu/assets/graphics/2018-imagery/header-graphics/';
    const graphicMobileAffix = '_mobile';
    const pageName = this.props.pageName.toLowerCase();
    return (
      <div className={classnames(
        'gridish-container--complete',
        'gridish-grid',
        'container', styles.padding__bottom, 'flex', 'flex-justify-between', 'flex-align-center')}
      >
        <h1 className={classnames(
          'gridish-grid__col--small--3',
          'gridish-grid__col--xsmall--2',
        )}>
          {pageName}
        </h1>
        <MediaQuery minWidth={449}>
          <img className={classnames(
            'gridish-grid__col--small--4 gridish-grid__col--xsmall--2', styles.graphic__height_small)} src={__PATH_PREFIX__ + graphicsURLPrefix + pageName + '.svg'}></img>
        </MediaQuery>
        <MediaQuery maxWidth={448}>
          <img className={classnames(
            'gridish-grid__col--xsmall--2', styles.graphic__height_xsmall)} src={__PATH_PREFIX__ + graphicsURLPrefix + pageName + graphicMobileAffix + '.svg'}></img>
        </MediaQuery>
      </div>
    );
  }
}

index.propTypes = {
  pageName: PropTypes.string.isRequired
};