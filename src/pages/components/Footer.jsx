import React from 'react'
import Img from "gatsby-image"

const Footer = ({ data }) => (
  <div>
    <h1>Footer</h1>
      {allFile.edges.map(img => {
        return <Img resolutions={img.node.childImageSharp.resolutions} />
      })}
  </div>
)
    
export default Footer;