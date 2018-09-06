import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
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