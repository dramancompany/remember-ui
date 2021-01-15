import React from 'react';
import { enableBodyScrollLock } from '../../../utils/common';
import useScrollLock from '../../../hooks/useScrollLock';

import {
  Container,
  Modal,
  Block,
  Title,
  SubTitle,
  Buttons,
  Button,
} from './DesignedModal.styles';

const modalType = 'designedModal';

export const DesignedModal = ({
  isOpen,
  onClose,
  title,
  subTitle,
  children,
  customText,
  submit,
  close,
  submitText,
  closeText = '닫기',
  submitButtonDisabled = false,
  headerButton,
  isLoading = false,
  isDraggable = false,
  isDragDisabled = false,
  isDragBounded = true,
  onAfterOpen = () => {},
  className,
  dragOnStart = () => {},
  dragOnStop = () => {},
  dragOnDrag = () => {},
  mobileWidth = '90vw',
  mobileHeight,
  bodyScrollLockTargetId,
  delegateCloseControl = false,
}) => {
  const { modalId, bodyScrollLockTarget } = useScrollLock(
    bodyScrollLockTargetId,
    modalType
  );

  return (
    <Container
      className={className}
      isOpen={isOpen}
      onClose={onClose}
      onAfterOpen={onAfterOpen}
      isDraggable={isDraggable}
      isDragDisabled={isDragDisabled}
      isDragBounded={isDragBounded}
      dragOnStart={dragOnStart}
      dragOnStop={dragOnStop}
      dragOnDrag={dragOnDrag}
      bodyScrollLockTarget={bodyScrollLockTarget}
    >
      <Modal
        isDraggable={isDraggable}
        mobileWidth={mobileWidth}
        mobileHeight={mobileHeight}
      >
        <Modal.Header>
          <Modal.Header.Content>
            <Title>{title}</Title>
            {subTitle && <SubTitle>{subTitle}</SubTitle>}
          </Modal.Header.Content>
          <Modal.Header.Content>{headerButton}</Modal.Header.Content>
        </Modal.Header>
        <Modal.Body id={modalId && `${modalType}${modalId}`}>
          {children}
        </Modal.Body>
        <Modal.Footer>
          {customText}
          <Block />
          <Buttons>
            {close && (
              <Button
                className="not-draggable"
                color="gray"
                size="large"
                fill
                rounded
                onClick={() => {
                  enableBodyScrollLock(
                    bodyScrollLockTarget,
                    delegateCloseControl
                  );
                  close();
                }}
                disabled={isLoading}
              >
                {closeText}
              </Button>
            )}
            {submit && (
              <Button
                className="not-draggable"
                color="yellow"
                size="large"
                fill
                rounded
                onClick={() => {
                  enableBodyScrollLock(
                    bodyScrollLockTarget,
                    delegateCloseControl
                  );
                  submit();
                }}
                disabled={submitButtonDisabled}
                isLoading={isLoading}
              >
                {submitText}
              </Button>
            )}
          </Buttons>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
