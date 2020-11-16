import React from 'react';
import t from 'prop-types';
import { DesignedModal as Component, GlobalTheme } from 'remember-ui';

export const DesignedModal = ({ children, ...rest }) => {
  return (
    <>
      <GlobalTheme />
      <Component {...rest}>{children}</Component>
    </>
  );
};

DesignedModal.propTypes = {
  title: t.string,
  subTitle: t.string,
  customText: t.string,
  closeText: t.string,
  submitText: t.string,

  isOpen: t.oneOf([false, true]),
  isDraggable: t.oneOf([false, true]),
  isDragDisabled: t.oneOf([false, true]),
  isDragBounded: t.oneOf([false, true]),
  isLoading: t.oneOf([false, true]),
  submitButtonDisabled: t.oneOf([false, true]),

  onClose: t.func,
  submit: t.func,
  close: t.func,
  onAfterOpen: t.func,

  headerButton: t.object,
  dragOnStart: t.func,
  dragOnStop: t.func,
  dragOnDrag: t.func,
  mobileWidth: t.string,
  mobileHeight: t.string,
  bodyScrollLockTargetId: t.string,
  delegateCloseControl: t.oneOf([false, true]),
};

DesignedModal.defaultProps = {
  closeText: '닫기',
  submitButtonDisabled: false,
  isLoading: false,
  isDraggable: false,
  isDragDisabled: false,
  isDragBounded: true,
  delegateCloseControl: false,
  onAfterOpen: () => {},
  dragOnStart: () => {},
  dragOnStop: () => {},
  dragOnDrag: () => {},
  mobileWidth: '90vw',
};
