import React from 'react';
import t from 'prop-types';
import { MaskingInput as Component } from 'remember-ui';

export const MaskingInput = ({ ...rest }) => {
  return <Component {...rest} />;
};

MaskingInput.propTypes = {
  type: t.string.isRequired,
  name: t.string.isRequired,
  value: t.string,
  placeholder: t.string,
  label: t.string,
  marginBottom: t.number,
  footer: t.string,
  className: t.string,

  autoFocus: t.oneOf([false, true]),
  required: t.oneOf([false, true]),
  disabled: t.oneOf([false, true]),
  useError: t.oneOf([false, true]),
  errorMark: t.oneOf([false, true]),
  blankLabel: t.oneOf([false, true]),

  mask: t.array,

  onChange: t.func,
  onClick: t.func,
  onEnter: t.func,
  validate: t.func,
};

MaskingInput.defaultProps = {
  type: 'text',
  className: '',
  autoFocus: false,
  required: false,
  disabled: false,
  useError: false,
  errorMark: false,
  blankLabel: false,

  onChange: () => {},
  onClick: () => {},
  onEnter: () => {},
  validate: () => {},
};
