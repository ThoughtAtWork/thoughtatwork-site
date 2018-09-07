import React, { Component } from 'react';
import Home from '../components/Home/index';

export class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Home/>
      </div>
    );
  }
}

export default home;
