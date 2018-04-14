import React from 'react'
import Link from 'gatsby-link'
import InfoNavigation from '../components/InfoNavigation'
import InfoWelcome from '../components/InfoWelcome'

const InfoWelcomePage = () => (
  <div>
    <h1>Info Page</h1>
    <Link to="/">Go back to the homepage</Link>

    <div className="container">
    	<InfoNavigation />
    	<InfoWelcome />
    </div>
  </div>
)

export default InfoWelcomePage
