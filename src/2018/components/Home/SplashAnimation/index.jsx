import React, { Component } from 'react';
import ShapesSplashAnimation from './ShapesSplashAnimation';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <ShapesSplashAnimation/>
      </React.Fragment>);
  }
}

export default Navigation;