import React, { Component } from 'react';
import Shapes from '../../assets/images/home-about-shapes.svg';
import classnames from 'classnames';
import styles from '../../styles/homeAbout.module.scss';

export default class HomeAbout extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       
    };
  }
  
  render() {
    return (
      <div className={classnames('gridish-container--complete', 'gridish-grid')}>
        <h3 className={classnames('gridish-grid__col--medium--5 gridish-grid__col--small--4 gridish-grid__col--xsmall--3 gridish-grid__height--xsmall--10')}>a design conference made for students by students.</h3>
        <img className={classnames('gridish-grid__col--xsmall--4', styles.image)} src={Shapes}/>
        <h3 className={classnames('gridish-grid__col--medium--5 gridish-grid__col--small--4 gridish-grid__col--xsmall--3 gridish-grid__height--xsmall--10')}>we provide countless talks, design workshops, nightly events and more.</h3>
      </div>
    );
  }
}
