import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default class EventContentfulTemplate extends Component {
  render() {
    // const post = this.props.data.contentfulBlogPost
    // const siteTitle = this.props.data.site.siteMetadata.title
    // const { previous, next } = this.props.pageContext

    return (
      <div>
        <StaticQuery
          query={EVENTS_TEMPLATE_QUERY}
          render={({ allContentfulEventsLibrary }) =>
            (
              <React.Fragment>
                {
                  allContentfulEventsLibrary.edges.map(event => (
                    <div
                      style={{ width: '400px' }}
                      key={event.node.name}>
                      <p>{event.node.name}</p>
                      <p>{event.node.slug}</p>
                    </div>
                  ))
                }
              </React.Fragment>
            )
          }
        />
      </div>
    );
  }
}

const EVENTS_TEMPLATE_QUERY = graphql`
  query AllEventsTemplate {
    allContentfulEventsLibrary {
      totalCount
      edges {
        node {
          slug
          name
          coverPhoto {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          startTime
          endTime
          location
          description {
            description
          }
          eventRegistrationWebpage
          eventScheduleItems {
            name
            startTime
            endTime
            description {
              description
            }
            eventType
            location
            speakers {
              name
              slug
            }
          }
          speaker {
            job
            slug
            headshot {
              fluid(maxWidth: 400, maxHeight: 400) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;