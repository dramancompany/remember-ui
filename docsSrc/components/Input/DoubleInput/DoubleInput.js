import React from 'react';
import t from 'prop-types';
import { DoubleInput as Component } from 'remember-ui';

export const DoubleInput = ({ ...rest }) => {
  return <Component {...rest} />;
};

DoubleInput.propTypes = {
  label1: t.string,
  label2: t.string,
  value1: t.string.isRequired,
  value2: t.string.isRequired,
  name1: t.string.isRequired,
  name2: t.string.isRequired,
  placeholder1: t.string,
  placeholder2: t.string,

  width: t.number,
  maxLength: t.number,
  onlyNumber: t.oneOf([false, true]),

  onChange1: t.func,
  onChange2: t.func,
  validate: t.func,
};

DoubleInput.defaultProps = {
  label2: ' ',
  onlyNumber: false,
  onChange1: () => {},
  onChange2: () => {},
  validate: () => {},
};
