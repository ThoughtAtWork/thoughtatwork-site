import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image";

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/speakers/">speakers page</Link>
    <Link to="/contact/">contact page</Link>
  </div>
)

export default IndexPage