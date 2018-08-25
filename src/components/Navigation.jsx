import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import DesktopNavigation from './Navigation/DesktopNavigation';
import MobileNavigation from './Navigation/MobileNavigation';


export class Navigation extends Component {
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
                <div>
                  <DesktopNavigation />
                </div>
              );
            }
          }}
        </MediaQuery>
      </div>);
  }
}

export default Navigation;