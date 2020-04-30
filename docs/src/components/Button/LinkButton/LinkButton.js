import React from 'react';
import t from 'prop-types';
import { LinkButton as Component } from '../../../../../dist/index.esm';

export const LinkButton = ({ children, ...rest }) => {
  return <Component {...rest}>{children}</Component>;
};

LinkButton.propTypes = {
  showAddress: t.oneOf([false, true]),
  address: t.string,
  className: t.string,
};

LinkButton.defaultProps = {
  showAddress: true,
  address: '',
  className: '',
};
