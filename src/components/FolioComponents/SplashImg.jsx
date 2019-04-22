import React from 'react';
import Img from 'gatsby-image';
import { Spring } from 'react-spring/renderprops';
import { StaticQuery, graphql } from 'gatsby';

const SplashImg = (location) => (
  <StaticQuery
    // example of using spring and querying a single image
    query={graphql`
      query SplashImageAnimateExample {
          file(relativePath : {
            regex: "/bg/"
          }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
      }
    `}
    render={data =>
      (
        <React.Fragment>
          {/* {location.pathname == '/' && 
            <Img fluid={data.file.childImageSharp.fluid} />
          } */}
          <Spring
            from={{ height: location.pathname === '/' ? 100 : 200 }}
            to={{ height: location.pathname === '/' ? 200 : 100 }}
          >
            {styles => (
              <div style={{ overflow: 'hidden', ...styles }}>
                <Img fluid={data.file.childImageSharp.fluid} />
              </div>
            )}
          </Spring>
        </React.Fragment>
      )}
  />
);

export default SplashImg;