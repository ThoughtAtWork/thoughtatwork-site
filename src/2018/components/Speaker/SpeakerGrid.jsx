import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SpeakerCards from './SpeakerCards.jsx';
import classnames from 'classnames';
import styles from '../../styles/components/speakers/speakerGrid.module.scss';

export default class Speaker extends Component {
  render() {
    return (
      <div>
        <h3 className={classnames('container flex gridish-container gridish-container--complete gridish-grid')}>Click on the speakers to find out more.</h3>
        <div className={classnames('content-Block--margin-top container flex gridish-container gridish-container--complete gridish-grid', styles.flexibleGrid)}>
          <StaticQuery
            query={SPEAKERS_2018_QUERY}
            render={({ allContentful2018Speakers }) =>
              (
                <React.Fragment>
                  {
                    allContentful2018Speakers.edges.map(speaker => (
                      <div className={classnames(styles.speakerSizing)} key={speaker.node.name}>
                        <SpeakerCards
                          name={speaker.node.name}
                          job={speaker.node.job}
                          bio={speaker.node.bio.bio}
                          webpage={speaker.node.webpage}
                          headshot={speaker.node.headshot.fluid}
                        />
                      </div>
                    ))
                  }
                </React.Fragment>
              )
            }
          />
        </div>
      </div>
    );
  }
}

const SPEAKERS_2018_QUERY = graphql`
  query speakers2018 {
    allContentful2018Speakers {
    totalCount
    edges {
			node
      {
        name
        job
				webpage
        bio {
          bio
        }
        headshot {
        fluid(maxWidth: 540, maxHeight: 540) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      }
    }
  }
  }`;
