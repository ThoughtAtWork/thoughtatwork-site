import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import styles from '../../styles/nav.module.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.navContainer_bottomMargin}>
        <MediaQuery maxWidth={880}>
          {(matches) => {
            if (matches) {
              return <MobileNavigation menuOpen={false} />;
            } else {
              return (
                <DesktopNavigation />
              );
            }
          }}
        </MediaQuery>
      </div>);
  }
}

export default Navigation;