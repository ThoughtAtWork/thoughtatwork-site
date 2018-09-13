import React from 'react';
import Form from './Form';
import Header from '../Header/index';
import Description from './Description';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Header pageName='contact'/>
        <Description />
        <Form />
      </div>
    );
  }
}

export default Contact;
