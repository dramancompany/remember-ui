import React from 'react';
import t from 'prop-types';
import { MobileFullModal as Component, GlobalTheme } from 'remember-ui';

export const MobileFullModal = ({ children, ...rest }) => {
  return (
    <>
      <GlobalTheme />
      <Component {...rest}>{children}</Component>
    </>
  );
};

MobileFullModal.propTypes = {
  topNavbarOffset: t.number,

  title: t.string,
  headerButtonText: t.string,
  submitText: t.string,

  isOpen: t.oneOf([false, true]),
  isLoading: t.oneOf([false, true]),
  submitButtonDisabled: t.oneOf([false, true]),

  onClose: t.func,
  submit: t.func,
  onAfterOpen: t.func,
  onHeaderButtonClick: t.func,

  headerButton: t.object,
  bodyScrollLockTargetId: t.string,
  delegateCloseControl: t.oneOf([false, true]),
};

MobileFullModal.defaultProps = {
  topNavbarOffset: '48px',
  headerButtonText: '',
  submitButtonDisabled: false,
  isLoading: false,
  delegateCloseControl: false,
  onAfterOpen: () => {},
  onHeaderButtonClick: () => {},
};
