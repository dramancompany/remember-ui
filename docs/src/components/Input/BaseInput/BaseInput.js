import React from 'react';
import t from 'prop-types';
import { BaseInput as Component } from '../../../../../dist/index.esm';

export const BaseInput = ({ ...rest }) => {
  return <Component {...rest} />;
};

BaseInput.propTypes = {
  type: t.string.isRequired,
  name: t.string.isRequired,
  value: t.string,
  placeholder: t.string,
  label: t.string,
  maxLength: t.number,
  marginBottom: t.number,
  outerRef: t.string,
  footer: t.object,
  className: t.string,

  autoFocus: t.oneOf([false, true]),
  required: t.oneOf([false, true]),
  disabled: t.oneOf([false, true]),
  useError: t.oneOf([false, true]),
  errorMark: t.oneOf([false, true]),
  onlyNumber: t.oneOf([false, true]),
  blankLabel: t.oneOf([false, true]),
  readOnly: t.oneOf([false, true]),

  onChange: t.func,
  onClick: t.func,
  onEnter: t.func,
  validate: t.func,
};

BaseInput.defaultProps = {
  type: 'text',
  className: '',
  autoFocus: false,
  required: false,
  disabled: false,
  useError: false,
  errorMark: false,
  onlyNumber: false,
  blankLabel: false,
  readOnly: false,
  onChange: () => {},
  onClick: () => {},
  onEnter: () => {},
  validate: () => {},
};
