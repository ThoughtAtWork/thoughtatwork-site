import React from 'react'
import Link from 'gatsby-link'
import InfoNavigation from '../components/InfoNavigation'
import InfoGetHere from '../components/InfoGetHere'

const InfoGetHerePage = () => (
  <div>
    <h1>Info Page</h1>
    <Link to="/">Go back to the homepage</Link>

    <div className="container">
    	<InfoNavigation />
    	<InfoGetHere />
    </div>
  </div>
)

export default InfoGetHerePage
