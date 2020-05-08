import React from 'react';
import t from 'prop-types';
import { BasePopover as Component, GlobalTheme } from 'remember-ui';

export const Popover = ({ children, ...rest }) => {
  return (
    <>
      <GlobalTheme />
      <Component {...rest}>{children}</Component>
    </>
  );
};

Popover.propTypes = {
  onOpen: t.func,
  onPopoverOpenChange: t.func,
  customElement: t.object,
  content: t.object,
  size: t.string,
  trigger: t.oneOf(['click', 'focus']),
  className: t.string,
  distance: t.number,
  placement: t.oneOf([
    'top',
    'right',
    'bottom',
    'left',
    'top-start',
    'right-start',
    'bottom-start',
    'left-start',
    'top-end',
    'right-end',
    'bottom-end',
    'left-end',
  ]),
  disabled: t.oneOf([false, true]),
};

Popover.defaultProps = {
  onPopoverOpenChange: () => {},
  onOpen: () => {},
  size: 'small',
  className: 'DcPopover',
  trigger: 'click',
  placement: 'bottom-end',
  distance: 10,
  disabled: false,
};
