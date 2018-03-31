import React from 'react'
import Classes from '../../styles'

import injectSheet from 'react-jss'

const Divider = ({ classes }) => (
    <div className={classes.divider}></div>
)

export default injectSheet(Classes)(Divider)