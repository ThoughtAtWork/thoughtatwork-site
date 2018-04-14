import React from 'react'
import Link from 'gatsby-link'
import Info from '../components/Info'

const InfoPage = () => (
  <div>
    <h1>Info Page</h1>
    <Link to="/">Go back to the homepage</Link>
    <Info />
  </div>
)

export default InfoPage
