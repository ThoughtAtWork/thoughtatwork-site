import React from 'react';
import Form from './Form';
import Header from '../Header/index';
import classnames from 'classnames';

class Contact extends React.Component {
  render() {
    return (
      <div className={classnames()}>
        <Header pageName='contact'/>
        <h3 className={classnames(
          'gridish-container--complete')}
        >Get in touch with us!</h3>
        <Form />
      </div>
    );
  }
}

export default Contact;
