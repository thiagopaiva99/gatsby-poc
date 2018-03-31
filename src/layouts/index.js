import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';

import Header from '../components/Header';
import HelmetHandler from '../components/HelmetHandler';
import Classes from '../styles';
import './index.css';

const TemplateWrapper = ({ classes, children }) => (
  <div>
    <HelmetHandler />
    <Header />
    <div className={classes.wrapGroup}>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default injectSheet(Classes)(TemplateWrapper);
