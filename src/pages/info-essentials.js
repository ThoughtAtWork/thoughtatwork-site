import React from 'react'
import Link from 'gatsby-link'
import InfoNavigation from '../components/InfoNavigation'
import InfoEssentials from '../components/InfoEssentials'

const InfoEssentialsPage = () => (
  <div>
    <h1>Info Page</h1>
    <Link to="/">Go back to the homepage</Link>

    <div className="container">
    	<InfoNavigation />
    	<InfoEssentials />
    </div>
  </div>
)

export default InfoEssentialsPage
