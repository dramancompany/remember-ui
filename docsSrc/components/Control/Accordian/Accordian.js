import React from 'react';
import t from 'prop-types';
import { Accordian as Component } from 'remember-ui';

export const Accordian = ({ ...rest }) => <Component {...rest} />;

Accordian.propTypes = {
  menus: t.array,
  hasCheckBox: t.oneOf([false, true]),
  onClickItem: t.func,
  onCheckItem: t.func,
  isCheckedItem: t.func,
};

Accordian.defaultProps = {
  menus: [],
  onClickItem: () => {},
  onCheckItem: () => {},
  isCheckedItem: () => {},
};
