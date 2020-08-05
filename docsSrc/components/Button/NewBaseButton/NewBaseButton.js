import React from 'react';
import t from 'prop-types';
import { NewBaseButton as Component } from 'remember-ui';

export const NewBaseButton = ({ children, ...rest }) => {
  return <Component {...rest}>{children}</Component>;
};

NewBaseButton.propTypes = {
  outline: t.bool,
  disabled: t.bool,
  isLoading: t.bool,
  theme: t.oneOf(['yellow', 'gray', 'red', 'light']),
  size: t.oneOf(['small', 'medium', 'large', 'xlarge']),
  className: t.string,
  onClick: t.func,
};

NewBaseButton.defaultProps = {
  outline: false,
  disabled: false,
  isLoading: false,
  theme: 'yellow',
  size: 'small',
  className: '',
  onClick: () => {},
};
