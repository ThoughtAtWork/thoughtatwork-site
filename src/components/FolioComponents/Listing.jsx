import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const LISTING_QUERY = graphql`
query ListingQuery {
   allMarkdownRemark(
    	limit: 1,
      filter: { fileAbsolutePath: {regex : "\/projects/"} },
      sort: {fields: [frontmatter___date], order: DESC},
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            URLpath
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
}
`;

// how to do this is shown in video 15 https://www.youtube.com/watch?v=9VosY2-dyf0

const Listing = () => (
  <React.Fragment>
    <StaticQuery
      query={LISTING_QUERY}
      render={({ allMarkdownRemark }) => (
        allMarkdownRemark.edges.map(({ node }) => (
          <section>
            <article key={node.frontmatter.URLpath}>
              <h3>Latest Post: {node.frontmatter.title}</h3>
              <p>
                {node.excerpt}
              </p>
              <p>
                {node.frontmatter.date}
              </p>
              <Link to={`/projects${node.frontmatter.URLpath}`} >Read More</Link>
            </article>
          </section>
        ))
      )}
    />
  </React.Fragment>
);

export default Listing;
