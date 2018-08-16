import React from "react";

import VimeoPlayer from 'react-player/lib/players/Vimeo';
import Animation from './Animation.jsx';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Title from "./Title.jsx";
import About from "./About.jsx";

class ComingSoon extends React.Component {
    render() {
        return (
            <div className="cs">
                <Header />
                    <div className="cs-content">
                        <Title/>
                        <Animation />
                        <VimeoPlayer
                            className="cs-video"
                            url='https://player.vimeo.com/video/263565186'
                            controls
                            vimeoConfig={{ playerOptions: { title: true } }}
                        />
                        <About />
                    </div>
                <Footer/>
            </div>    
        );
    }
}

export default ComingSoon;
