import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default class SpeakerContentfulTemplate extends Component {
  render() {
    // const post = this.props.data.contentfulBlogPost
    // const siteTitle = this.props.data.site.siteMetadata.title
    // const { previous, next } = this.props.pageContext

    return (
      <div>
        <StaticQuery
          query={SPEAKERS_TEMPLATE_QUERY}
          render={({ allContentfulSpeakersLibrary }) => (
            <React.Fragment>
              {allContentfulSpeakersLibrary.edges.map(speaker => (
                <div style={{ width: '400px' }} key={speaker.node.name}>
                  <Img
                    style={{ width: '200px' }}
                    fluid={speaker.node.headshot.fluid}
                  />
                  <p>{speaker.node.slug}</p>
                  <p>{speaker.node.name}</p>
                  <p>{speaker.node.job}</p>
                  <p>{speaker.node.bio.bio}</p>
                  <a href={speaker.node.webpage}>Webpage</a>
                </div>
              ))}
            </React.Fragment>
          )}
        />
      </div>
    );
  }
}

const SPEAKERS_TEMPLATE_QUERY = graphql`
  query AllSpeakersTemplate {
    allContentfulSpeakersLibrary {
      totalCount
      edges {
        node {
          slug
          name
          job
          webpage
          bio {
            bio
          }
          headshot {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
