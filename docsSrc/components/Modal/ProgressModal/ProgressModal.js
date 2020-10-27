import React from 'react';
import t from 'prop-types';
import { ProgressModal as Component, GlobalTheme } from 'remember-ui';

export const ProgressModal = ({ children, ...rest }) => {
  return (
    <>
      <GlobalTheme />
      <Component {...rest}>{children}</Component>
    </>
  );
};

ProgressModal.propTypes = {
  icon: t.string,
  title: t.func || t.string,
  currentCount: t.number,
  totalCount: t.number,
  message: t.string,
  isOpen: t.oneOf([false, true]),
  isDraggable: t.oneOf([false, true]),
  isDragBounded: t.oneOf([false, true]),
  dragOnStart: t.func,
  dragOnStop: t.func,
  dragOnDrag: t.func,
};

ProgressModal.defaultProps = {
  currentCount: 0,
  totalCount: 1,
  isDraggable: false,
  isDragBounded: true,
  dragOnStart: () => {},
  dragOnStop: () => {},
  dragOnDrag: () => {},
};
