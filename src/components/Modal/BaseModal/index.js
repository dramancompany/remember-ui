import React from 'react';
import Modal from 'react-modal';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import Draggable from 'react-draggable';

Modal.setAppElement('body');

export const BaseModal = ({
  isOpen = false,
  onClose = () => {},
  onAfterOpen = () => {},
  allowKeyExit = true,
  children,
  isDraggable = false,
}) => {
  return (
    <Modal
      overlayClassName={{
        base: 'dc-modal-overlay',
        afterOpen: 'dc-modal-overlay--open',
        beforeClose: 'dc-modal-overlay--close',
      }}
      className="dc-modal"
      isOpen={isOpen}
      onRequestClose={onClose}
      onAfterOpen={() => {
        onAfterOpen();
        disableBodyScroll(document.querySelector('body'));
      }}
      onAfterClose={clearAllBodyScrollLocks}
      shouldCloseOnOverlayClick={false}
      /**
       * Reference: http://reactcommunity.org/react-modal/#usage
       * `esc` key press시 onClose가 호출됨
       * onCloseAction과 onOk 대응이 필요한 경우가 있어 해당 옵션은 사용하지 않는 것으로 수정
       * modal의 경우 해당 액션이 필요하여 분기처리
       */
      shouldCloseOnEsc={allowKeyExit}
    >
      {isDraggable && <Draggable>{children}</Draggable>}
      {!isDraggable && children}
    </Modal>
  );
};
