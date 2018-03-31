import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header';
import Footer from '../components/Footer';

import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      title="Thought At Work 2018"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    </Helmet>
    <Header />
    <div
  
    >
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper