import React from 'react';
import t from 'prop-types';
import { ConfirmModal as Component, GlobalTheme } from 'remember-ui';

export const ConfirmModal = ({ children, ...rest }) => {
  return (
    <>
      <GlobalTheme />
      <Component {...rest}>{children}</Component>
    </>
  );
};

ConfirmModal.propTypes = {
  icon: t.oneOf(['warning', 'success']),
  type: t.oneOf(['delete', 'ok']),

  title: t.string,
  message: t.string,
  okText: t.string,
  closeText: t.string,

  isOpen: t.oneOf([false, true]),
  showClose: t.oneOf([false, true]),
  isDraggable: t.oneOf([false, true]),
  isDragDisabled: t.oneOf([false, true]),
  isDragBounded: t.oneOf([false, true]),

  onClose: t.func,
  onOk: t.func,
  onAfterOpen: t.func,
  onCloseAction: t.func,
  dragOnStart: t.func,
  dragOnStop: t.func,
  dragOnDrag: t.func,
  mobileWidth: t.string,
  mobileHeight: t.string,
  bodyScrollLockTargetId: t.string,
  delegateCloseControl: t.oneOf([false, true]),
};

ConfirmModal.defaultProps = {
  icon: 'success',
  type: 'ok',
  showClose: true,
  isDraggable: false,
  isDragDisabled: false,
  isDragBounded: true,
  delegateCloseControl: false,
  onClose: () => {},
  dragOnStart: () => {},
  dragOnStop: () => {},
  dragOnDrag: () => {},
  mobileWidth: '90vw',
};
