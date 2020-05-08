import React from 'react';
import t from 'prop-types';
import { BaseModal as Component, GlobalTheme } from 'remember-ui';

export const BaseModal = ({ children, ...rest }) => {
  return (
    <>
      <GlobalTheme />
      <Component {...rest}>{children}</Component>
    </>
  );
};

BaseModal.propTypes = {
  isOpen: t.oneOf([false, true]),
  allowKeyExit: t.oneOf([false, true]),
  onClose: t.func,
  onAfterOpen: t.func,
};

BaseModal.defaultProps = {
  isOpen: false,
  allowKeyExit: true,
  onClose: () => {},
  onAfterOpen: () => {},
};
