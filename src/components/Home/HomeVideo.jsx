import React, { Component } from 'react';
import VimeoPlayer from 'react-player';
import classnames from 'classnames';
import styles from '../../styles/components/home/homeVideo.module.scss';

export default class HomeVideo extends Component {
  render() {
    return (
      <div>
        <h1 className={classnames('content-Block--margin-top container flex gridish-container gridish-container--complete gridish-grid__height--medium--13 gridish-grid__height--small--14 gridish-grid__height--xsmall--12')}>new 2018 recap</h1>
        <VimeoPlayer
          className={classnames(styles.home_video, 'container gridish-container--complete gridish-container gridish-grid__col--xsmall--4')}
          url='https://player.vimeo.com/video/316193253'
          controls
          width='100%'
          height='50vw'
          vimeoConfig={{ playerOptions: { title: true } }}
        />
      </div>
    );
  }
}
