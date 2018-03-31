import React from 'react';
import Helmet from 'react-helmet';

import { applicationTitle, metaProps } from '../../data';

const HelmetHandler = () => (
  <Helmet title={applicationTitle} meta={metaProps} />
);

export default HelmetHandler;
