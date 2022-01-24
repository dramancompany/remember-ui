import React from 'react';
import t from 'prop-types';
import { Switch as Component, yellow100 } from 'remember-ui';

export const Switch = ({ ...rest }) => <Component {...rest} />;

Switch.propTypes = {
  checked: t.bool.isRequired,
  onClick: t.func,
  size: t.oneOf(['small', 'large']),
  color: t.string,
};

Switch.defaultProps = {
  checked: false,
  onClick: () => {},
  size: 'small',
  color: yellow100,
};
