import React from 'react';
import t from 'prop-types';
import { Select as Component } from '../../../../../dist/index.esm';

export const Select = ({ ...rest }) => <Component {...rest} />;

Select.propTypes = {
  options: t.array,
  value: t.string,
  onChange: t.func,
  changeInputMode: t.func,
  label: t.string,
  required: t.oneOf([false, true]),
  isFixedSelect: t.oneOf([false, true]),
  maxHeight: t.number,
};

Select.defaultProps = {
  options: [],
};
