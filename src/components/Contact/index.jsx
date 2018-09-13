import React from 'react';
import Form from './Form';
import Header from '../Header/index';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Header pageName='contact'/>
        <Form />
      </div>
    );
  }
}

export default Contact;
