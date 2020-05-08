import React from 'react';
import t from 'prop-types';
import { PopoverItem as Component } from 'remember-ui';

export const PopoverItem = ({ children, ...rest }) => (
  <Component {...rest}>{children}</Component>
);

PopoverItem.propTypes = {
  selected: t.oneOf([false, true]),
  warning: t.oneOf([false, true]),
  bold: t.oneOf([false, true]),
  onClick: t.func,
};

PopoverItem.defaultProps = {
  selected: false,
  warning: false,
  bold: false,
};
