import React from 'react';
import t from 'prop-types';
import { Textarea as Component } from 'remember-ui';

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
  ref: t.shape({ current: t.any }),

  first: t.oneOf([false, true]),
  required: t.oneOf([false, true]),
  blankLabel: t.oneOf([false, true]),

  countLength: t.oneOf([false, true]),

  onChange: t.func,
  textareaOnClick: t.func,
};

Textarea.defaultProps = {
  type: 'text',
  className: '',
  required: false,
  blankLabel: false,
  first: false,
  countLength: false,
  onChange: () => {},
  textareaOnClick: () => {},
};
