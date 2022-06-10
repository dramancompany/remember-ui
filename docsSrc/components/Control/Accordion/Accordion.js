import React from 'react';
import t from 'prop-types';
import { Accordion as Component } from 'remember-ui';

export const Accordion = ({ ...rest }) => <Component {...rest} />;

Accordion.propTypes = {
  menus: t.array,
  hasCheckBox: t.oneOf([false, true]),
  onClickItem: t.func,
  onCheckItem: t.func,
  isCheckedItem: t.func,
};

Accordion.defaultProps = {
  menus: [],
  onClickItem: () => {},
  onCheckItem: () => {},
  isCheckedItem: () => {},
};
