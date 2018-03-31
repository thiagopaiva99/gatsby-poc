import React from 'react';
import Link from 'gatsby-link';
import injectSheet from 'react-jss';

import Classes from '../../styles';
import { pages } from '../../data';

const HeaderLinks = ({ classes }) => (
  <ul className={classes.list}>
    {pages.map(page => (
      <li key={page.id}>
        <Link to={page.link}>{page.title}</Link>
      </li>
    ))}
  </ul>
);

export default injectSheet(Classes)(HeaderLinks);
