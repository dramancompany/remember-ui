import React from 'react';
import t from 'prop-types';
import { MoreButton as Component } from 'remember-ui';

export const MoreButton = ({ children, ...rest }) => {
  return <Component {...rest}>{children}</Component>;
};

MoreButton.propTypes = {
  value: t.oneOf([false, true]),
  size: t.oneOf(['small', 'large']),
  onClick: t.func,
};

MoreButton.defaultProps = {
  value: false,
  size: 'small',
  onClick: () => {},
};
