import React from 'react';
import t from 'prop-types';
import { Chip as Component } from '../../../../dist/index.esm';

export const Chip = ({ children, ...rest }) => (
  <Component {...rest}>{children}</Component>
);

Chip.propTypes = {
  isOverflowed: t.oneOf([false, true]),
};

Chip.defaultProps = {
  isOverflowed: false,
};
