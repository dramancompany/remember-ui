import React from 'react';
import { TopButton as Component } from '../../../../../dist/index.esm';

export const TopButton = ({ children, ...rest }) => {
  return <Component {...rest}>{children}</Component>;
};
