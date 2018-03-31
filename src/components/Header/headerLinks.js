import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import Classes from '../../styles'

const getPages = () => [
    { id: 0, title: 'Home', link: '/' },
    { id: 1, title: 'About', link: '/about' },
    { id: 2, title: 'Contact', link: '/contact' },
    { id: 3, title: 'Tests', link: '/tests' }
]

const HeaderLinks = ({ classes }) => (
    <ul className={classes.list}>
        {getPages().map(page => (
            <li key={page.id}>
                <Link to={page.link}>
                    {page.title}
                </Link>
            </li>
        ))}
    </ul>
)

export default injectSheet(Classes)(HeaderLinks)