import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Footer from './Footer';
// import '../../2018/styles/index.scss';


const Layout = ({ children }) => (
  <StaticQuery
    // how would i make that regex dynamic???
    // https://www.leveluptutorials.com/tutorials/pro-gatsby-2/gatsby-image used this video for the code
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={() =>
      (
        <React.Fragment>
          
          {children}
          <Footer />
        </React.Fragment>
      )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  location: {}
};

export default Layout;
