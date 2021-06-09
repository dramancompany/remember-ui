import React from 'react';
import t from 'prop-types';
import { MessageModal as Component, GlobalTheme } from 'remember-ui';

export const MessageModal = ({ children, ...rest }) => {
  return (
    <>
      <GlobalTheme />
      <Component {...rest}>{children}</Component>
    </>
  );
};

MessageModal.propTypes = {
  isOpen: t.oneOf([false, true]),
  onConfirm: t.func,
  onCancel: t.func,
  onClose: t.func,
  confirmText: t.string,
  cancelText: t.string,
};

MessageModal.defaultProps = {
  confirmText: '확인',
  cancelText: '취소',
};
