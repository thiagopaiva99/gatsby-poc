import React from 'react'
import injectSheet from 'react-jss'

import Classes from '../styles'

const Contact = ({ classes }) => (
    <div>
        <h1 className={classes.h1Header}>Contact Me</h1>
    </div>
)

export default injectSheet(Classes)(Contact)