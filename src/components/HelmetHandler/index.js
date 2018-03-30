import React from 'react'
import Helmet from 'react-helmet'

import { applicationTitle } from '../../data'

const metaProps = [
    { name: 'description', content: 'Sample' },
    { name: 'keywords', content: 'sample, something' },
]

const HelmetHandler = () => (
    <Helmet
        title={applicationTitle}
        meta={metaProps} />
)

export default HelmetHandler