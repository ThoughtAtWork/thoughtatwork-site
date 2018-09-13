import React, { Component } from 'react';

export default class index extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    };
  }
  
  render() {
    let getURL = window.location.href;
    let currentPage = getURL.substring(getURL.lastIndexOf('/') + 1);

    
    
    
    return (
      <div>
        <h1>{this.props.pageName}</h1>
      </div>
    );
  }
}
