import React from 'react';
import { TopButton as Component } from 'remember-ui';

export const TopButton = ({ children, ...rest }) => {
  return <Component {...rest}>{children}</Component>;
};
