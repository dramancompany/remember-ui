import React from 'react';
import t from 'prop-types';
import { Radio as Component } from 'remember-ui';

export const Radio = ({ ...rest }) => <Component {...rest} />;

Radio.propTypes = {
  isChecked: t.oneOf([false, true]),
  theme: t.oneOf(['yellow', 'black']),
  onClick: t.func,
};

Radio.defaultProps = {
  isChecked: false,
  theme: 'yellow',
  onClick: () => {},
};
