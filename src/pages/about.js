import React from 'react'
import injectSheet from 'react-jss'

import Classes from '../styles'

const About = ({ classes }) => (
    <div>
        <h1 className={classes.h1Header}>About Me</h1>
    </div>
)

export default injectSheet(Classes)(About)