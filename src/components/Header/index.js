import React from 'react';
import Link from 'gatsby-link';
import injectSheet from 'react-jss';

import HeaderLinks from './headerLinks';
import { applicationTitle } from '../../data';
import Classes from '../../styles';

const Header = ({ classes }) => (
  <div className={classes.header}>
    <div className={classes.wrapper}>
      <h1 className={classes.h1Header}>
        <Link to="/" className={classes.link}>
          {applicationTitle}
        </Link>
      </h1>

      <HeaderLinks />
    </div>
  </div>
);

export default injectSheet(Classes)(Header);
