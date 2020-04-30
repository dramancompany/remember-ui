import React from 'react';
import t from 'prop-types';
import { BaseButton as Component } from '../../../../../dist/index.esm';

export const BaseButton = ({ children, ...rest }) => {
  return <Component {...rest}>{children}</Component>;
};

BaseButton.propTypes = {
  rounded: t.oneOf([false, true]),
  fill: t.oneOf([false, true]),
  borderless: t.oneOf([false, true]),
  disabled: t.oneOf([false, true]),
  isLoading: t.oneOf([false, true]),
  color: t.oneOf([
    'black',
    'yellow',
    'light-yellow',
    'gray',
    'blue',
    'red',
    'lite',
    'plus',
  ]),
  size: t.oneOf(['small', 'medium', 'large', 'xlarge']),
  width: t.string,
  className: t.string,
  onClick: t.func,
};

BaseButton.defaultProps = {
  rounded: true,
  fill: false,
  borderless: false,
  disabled: false,
  isLoading: false,
  color: 'yellow',
  size: 'small',
  width: '72',
  className: '',
  onClick: () => {},
};
