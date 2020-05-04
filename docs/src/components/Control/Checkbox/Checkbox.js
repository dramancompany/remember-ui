import React from 'react';
import t from 'prop-types';
import { Checkbox as Component } from '../../../../../dist/index.esm';

export const Checkbox = ({ ...rest }) => <Component {...rest} />;

Checkbox.propTypes = {
  state: t.oneOf(['on', 'off']),
  disabled: t.oneOf([false, true]),
  onClick: t.func,
};

Checkbox.defaultProps = {
  state: 'off',
  disabled: false,
  onClick: () => {},
};
