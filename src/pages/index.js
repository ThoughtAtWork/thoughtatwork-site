import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image";

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="footer-sponsors">
      {data.allFile.edges.map(img => { 
        return <div className="logo-card"><Img resolutions={img.node.childImageSharp.resolutions} /></div>
      })}
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage

export const query = graphql`
  query ImagesQuery {
      # the filter is usefull if you have multiple source-filesystem instances
      # the name "images" is set in the gatsby-config
    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      edges {
        node {
            childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            resolutions(width: 125, height: 125) {
              ...GatsbyImageSharpResolutions
            }
          }
      }
    }
  }
}
`;
  