import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import HelmetHandler from '../components/HelmetHandler'
import './index.css'

const divWrapperStyle = {
  margin: '0 auto',
  maxWidth: 960,
  padding: '0px 1.0875rem 1.45rem',
  paddingTop: 0,
}

const TemplateWrapper = ({ children }) => (
  <div>
    <HelmetHandler />
    <Header />
    <div style={divWrapperStyle} >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
