import React from 'react';
import Contact from '../components/Contact';

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Contact />
      </div>
    );
  }
}