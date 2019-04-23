import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SpeakerPhoto from './SpeakerPhoto.jsx';
import classnames from 'classnames';
import styles from '../../styles/components/speakers/speakerCarousel.module.scss';
import DragScroll from 'react-dragscroll';

export default class SpeakerCarousel extends Component {

  render() {
    return (
      <div>
        <DragScroll height={'unset'} width={'unset'} className={classnames(styles.speaker_lineup__Carousel, 'flex')}>
        </DragScroll>
      </div>
    );
  }
}