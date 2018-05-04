import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


import Header from '../components/Header'
import Navigation from '../components/Navigation.jsx'
import Footer from '../components/Footer'
import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
	  <Navigation />
    <Helmet
      title="Thought At Work 2018"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
    <Footer />

  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
