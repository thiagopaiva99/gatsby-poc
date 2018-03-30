import React from 'react'
import Link from 'gatsby-link'

import HeaderLinks from './headerLinks'
import { applicationTitle } from '../../data'

const headerStyle = {
  background: '#3F51B5',
  marginBottom: '1.45rem',
}

const divGroupsStyle = {
  margin: '0 auto',
  maxWidth: 960,
  padding: '1.45rem 1.0875rem',
}

const h1Style = { 
  margin: 0
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
}

const Header = () => (
  <div style={headerStyle}>
    <div style={divGroupsStyle}>
      <h1 style={h1Style}>
        <Link to="/" style={linkStyle}>
          { applicationTitle }
        </Link>
      </h1>

      <HeaderLinks />
    </div>
  </div>
)

export default Header
