import React from 'react'
import Link from 'gatsby-link'
import InfoNavigation from '../components/InfoNavigation'
import InfoWhereToStay from "../components/InfoWhereToStay"

const InfoWhereToStayPage = () => (
  <div>
    <h1>Info Page</h1>
    <Link to="/">Go back to the homepage</Link>

    <div className="container">
    	<InfoNavigation />
    	<InfoWhereToStay />
    </div>
  </div>
)

export default InfoWhereToStayPage
