import React from 'react';
import SpeakerGrid from '../components/Speaker/SpeakerGrid';
import Header from '../components/Header/index';

const SpeakerPage = () => (
  <div className="container">
    <Header pageName='speakers'/>
    <SpeakerGrid/>
  </div>
);

export default SpeakerPage;
