import React from 'react'
import Link from 'gatsby-link'

const getPages = () => [
    { id: 0, title: 'Home', link: '/' },
    { id: 1, title: 'About', link: '/about' },
    { id: 2, title: 'Contact', link: '/contact' },
    { id: 3, title: 'Counter', link: '/counter' }
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
            <li key={page.id}>
                <Link to={page.link}>
                    {page.title}
                </Link>
            </li>
        ))}
    </ul>
)

export default HeaderLinks