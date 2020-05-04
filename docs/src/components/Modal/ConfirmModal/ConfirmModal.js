import React from 'react';
import t from 'prop-types';
import { ConfirmModal as Component } from '../../../../../dist/index.esm';

export const ConfirmModal = ({ children, ...rest }) => {
  return <Component {...rest}>{children}</Component>;
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

  onClose: t.func,
  onOk: t.func,
  onAfterOpen: t.func,
  onCloseAction: t.func,
};

ConfirmModal.defaultProps = {
  icon: 'success',
  type: 'ok',
  showClose: true,
  onClose: () => {},
};
