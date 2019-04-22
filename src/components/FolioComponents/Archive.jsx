import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const POST_ARCHIVE_QUERY = graphql`
  query ArchiveQuery {
        allMarkdownRemark(
          limit: 6,
          filter: { fileAbsolutePath: {regex : "\/projects/"}, frontmatter: { published: { ne: false } } },
          sort: {
            order: DESC,
            fields: [frontmatter___date],
            
        }) {
          edges {
            node {
              frontmatter {
                title
                URLpath
                published
                date(formatString: "MMMM DD, YYYY")
                description
                tags
              }
            }
          }
        }
      }
`;

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) =>
      (
        <React.Fragment>
          <section className="projects grid">
            {
              allMarkdownRemark.edges.map(project => (
                <div className="project grid__col grid__col--1-of-3" key={project.node.frontmatter.URLpath}>
                  <span className="meta-data code">{project.node.frontmatter.tags}</span>
                  <Link to={`/projects${project.node.frontmatter.URLpath}`}>
                    <span>{project.node.frontmatter.description}</span>
                  </Link>
                </div>
              ))
            }
          </section>
        </React.Fragment>
      )
    }
  />
);

export default Archive;