import React from 'react';
import t from 'prop-types';
import { Switch as Component } from 'remember-ui';

export const Switch = ({ ...rest }) => <Component {...rest} />;

Switch.propTypes = {
  checked: t.bool.isRequired,
  onClick: t.func,
  size: t.oneOf(['medium', 'large']),
};

Switch.defaultProps = {
  onClick: () => {},
  size: 'medium',
};
