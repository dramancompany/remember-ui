import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import React, { ReactNode } from 'react';
import Draggable from 'react-draggable';
import Modal from 'react-modal';

import { enableBodyScrollLock } from '../../../utils/common';

import { Container } from './BaseModal.styles';

Modal.setAppElement('body');

export interface BaseModalProps extends ReactModal.Props {
  isOpen: boolean;
  isDraggable?: boolean;
  isDragDisabled?: boolean;
  isDragBounded?: boolean;
  /** ESC 키로 모달 닫기 가능 여부 */
  allowKeyExit?: boolean;
  /** 스크롤 이벤트를 방지할 엘리먼트 셀렉터 */
  bodyScrollLockTarget?: string | null;
  onClose?: () => void;
  onAfterOpen?: () => void;
  dragOnStart?: () => void;
  dragOnStop?: () => void;
  dragOnDrag?: () => void;
  children?: ReactNode;
}

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const BaseModal = ({
  isOpen = false,
  onClose = () => {},
  onAfterOpen = () => {},
  allowKeyExit = true,
  children,
  isDraggable = false,
  isDragDisabled = false,
  isDragBounded = true,
  dragOnStart = () => {},
  dragOnStop = () => {},
  dragOnDrag = () => {},
  bodyScrollLockTarget = '',
  ...props
}: BaseModalProps) => {
  const dragBounds = isDraggable && isDragBounded ? '.dc-modal-overlay' : '';
  const dragCancelTarget = 'input, textarea, .not-draggable';
  return (
    <Modal
      overlayClassName={{
        base: 'dc-modal-overlay',
        afterOpen: isDraggable ? '' : 'dc-modal-overlay--open',
        beforeClose: 'dc-modal-overlay--close',
      }}
      className="dc-modal"
      isOpen={isOpen}
      onRequestClose={() => {
        enableBodyScrollLock(bodyScrollLockTarget);
        onClose();
      }}
      onAfterOpen={() => {
        onAfterOpen();
        if (isDraggable) return;
        if (bodyScrollLockTarget) {
          const targetNodes = document.querySelectorAll(bodyScrollLockTarget);
          targetNodes.forEach((el) => {
            if (el !== null) {
              disableBodyScroll(el);
            }
          });
        }
      }}
      onAfterClose={() => {
        const modalNodes = document.querySelector('.dc-modal-overlay--open');
        if (modalNodes === null) {
          clearAllBodyScrollLocks();
        }
      }}
      shouldCloseOnOverlayClick={false}
      /**
       * Reference: http://reactcommunity.org/react-modal/#usage
       * `esc` key press시 onClose가 호출됨
       * onCloseAction과 onOk 대응이 필요한 경우가 있어 해당 옵션은 사용하지 않는 것으로 수정
       * modal의 경우 해당 액션이 필요하여 분기처리
       */
      shouldCloseOnEsc={allowKeyExit}
      {...props}
    >
      {isDraggable && (
        <Draggable
          bounds={dragBounds}
          cancel={dragCancelTarget}
          onStart={dragOnStart}
          onStop={dragOnStop}
          onDrag={dragOnDrag}
          disabled={isDragDisabled}
        >
          <Container isDraggable={isDraggable && !isDragDisabled}>
            {children}
          </Container>
        </Draggable>
      )}
      {!isDraggable && <Container>{children}</Container>}
    </Modal>
  );
};
