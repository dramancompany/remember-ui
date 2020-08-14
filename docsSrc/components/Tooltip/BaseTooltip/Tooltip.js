import React from 'react';
import t from 'prop-types';
import { BaseTooltip as Component, GlobalTheme } from 'remember-ui';

export const Tooltip = ({ ...rest }) => {
  return (
    <>
      <GlobalTheme />
      <Component {...rest} />
    </>
  );
};

Tooltip.propTypes = {
  customComponent: t.object,
  offset: t.string,
  arrow: t.oneOf([false, true]),
  onClick: t.func,
  iconStyle: t.object,

  size: t.oneOf(['small', 'medium']),
  type: t.oneOf(['help', 'plus', 'more']),
  theme: t.oneOf(['dclight', 'dcdark', 'dcblue']),
  placement: t.oneOf(['bottom', 'top', 'right', 'left']),
  textAlign: t.oneOf(['center', 'left', 'right']),
};

Tooltip.defaultProps = {
  offset: '0,0',
  arrow: true,
  onClick: () => {},
  size: 'small',
  type: 'help',
  theme: 'dclight',
  placement: 'bottom',
  textAlign: 'center',
};
