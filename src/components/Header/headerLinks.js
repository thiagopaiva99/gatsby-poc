import React from 'react'
import Link from 'gatsby-link'

const getPages = () => [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Contact', link: '/contact' },
]

const listStyle = {
    color: "white",
    listStyleType: "none",
    display: "flex",
    margin: "0 auto",
    fontFamily: "Arial"
}

const HeaderLinks = () => (
    <ul style={listStyle}>
        {getPages().map(page => (
            <Link to={page.link}>
                {page.title}
            </Link>
        ))}
    </ul>
)

export default HeaderLinks