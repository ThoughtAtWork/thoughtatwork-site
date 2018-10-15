import React from 'react';
import Header from '../Header/index';
import classnames from 'classnames';

class About extends React.Component {
  render() {
    return (
      <div className={classnames()}>
        <Header pageName='about' />
        <h3 className={classnames(
          'container gridish-container gridish-container--complete')}
        >About Us</h3>
        <Form />
      </div>
    );
  }
}

export default About;
