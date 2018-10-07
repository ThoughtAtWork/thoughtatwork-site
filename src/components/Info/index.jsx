import React from 'react';
import Header from '../Header';
import styles from '../../styles/components/info/InfoMain.module.scss';
import InfoGetHere from '../InfoGetHere';
import InfoWhereToStay from '../InfoWhereToStay';
import InfoWelcome from '../InfoWelcome';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directionInfo: true,
      hotelInfo: false,
      otherInfo: false,
    };
    
  }

  render() {
    return (
      <div>
        <Header pageName='info' />
        <div className={'flex flex-justify-around gridish-container'}>
        </div>
        <div className={'content-Block--margin-top'}></div>
        {this.state.directionInfo && <InfoGetHere />}
        {this.state.hotelInfo && <InfoWhereToStay />}
        {this.state.otherInfo && <InfoWelcome />}
      </div>
    );
  }
}

export default Info;