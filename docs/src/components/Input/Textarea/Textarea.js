import React from 'react';
import t from 'prop-types';
import { Textarea as Component } from '../../../../../dist/index.esm';

export const Textarea = ({ ...rest }) => {
  return <Component {...rest} />;
};

Textarea.propTypes = {
  type: t.string.isRequired,
  name: t.string.isRequired,
  value: t.string,
  placeholder: t.string,
  label: t.string,
  maxLength: t.number,

  first: t.oneOf([false, true]),
  required: t.oneOf([false, true]),
  blankLabel: t.oneOf([false, true]),

  onChange: t.func,
};

Textarea.defaultProps = {
  type: 'text',
  className: '',
  required: false,
  blankLabel: false,
  first: false,
  onChange: () => {},
};
