import React from 'react';

import VimeoPlayer from 'react-player';
import Animation from './Animation.jsx';
import Footer from './Footer.jsx';
import Title from './Title.jsx';
import About from './About.jsx';

class ComingSoon extends React.Component {
  render() {
    return (
      <div className='cs'>
        <div className='cs-content'>
          <Title />
          <Animation />
          <VimeoPlayer
            className='cs-video'
            url='https://player.vimeo.com/video/263565186'
            controls
            vimeoConfig={{ playerOptions: { title: true } }}
          />
          <About />
        </div>
        <Footer />
      </div>
    );
  }
}

export default ComingSoon;
