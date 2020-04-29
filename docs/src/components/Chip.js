import React from 'react';
import t from 'prop-types';
import { Chip as Component } from '../../../dist/index.esm';

export const Chip = ({ children, isOverflowed, ...rest }) => (
  <Component isOverflowed={isOverflowed} {...rest}>
    {children}
  </Component>
);

Chip.propTypes = {
  /**
   * The kind prop is used to set the overflowed text
   */
  isOverflowed: t.oneOf([false, true]),
};

Chip.defaultProps = {
  isOverflowed: false,
};
