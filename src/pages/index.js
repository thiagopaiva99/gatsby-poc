import React from 'react';
import Link from 'gatsby-link';
import injectSheet from 'react-jss';

import Classes from '../styles';

const IndexPage = ({ classes }) => (
  <div>
    <h1 className={classes.h1Header}>Home</h1>
  </div>
);

export default injectSheet(Classes)(IndexPage);
