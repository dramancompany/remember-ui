import React, { ReactNode } from 'react';
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
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalHeaderContent,
} from './DesignedModal.styles';
import { BaseModalProps } from '../BaseModal';

const modalType = 'designedModal';

export interface DesignedModalProps
  extends Omit<
    BaseModalProps,
    'allowKeyExit' | 'bodyScrollLockTarget' | 'children'
  > {
  title?: string;
  subTitle?: string;
  customText?: string;
  submit?: () => void;
  close?: () => void;
  submitText?: string;
  closeText?: string;
  submitButtonDisabled?: boolean;
  headerButton?: ReactNode;
  isLoading?: boolean;
  mobileWidth?: string | number;
  mobileHeight?: string | number;
  bodyScrollLockTargetId?: string | null;
  delegateCloseControl?: boolean;
  children?: ReactNode;
}

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
  dragOnStart = () => {},
  dragOnStop = () => {},
  dragOnDrag = () => {},
  mobileWidth = '90vw',
  mobileHeight,
  bodyScrollLockTargetId,
  delegateCloseControl = false,
}: DesignedModalProps) => {
  const { modalId, bodyScrollLockTarget } = useScrollLock(
    bodyScrollLockTargetId,
    modalType
  );
  const buttonCount = submit && close ? 2 : 1;
  return (
    <Container
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
        <ModalHeader>
          <ModalHeaderContent>
            <Title>{title}</Title>
            {subTitle && <SubTitle>{subTitle}</SubTitle>}
          </ModalHeaderContent>
          <ModalHeaderContent>{headerButton}</ModalHeaderContent>
        </ModalHeader>
        <ModalBody id={modalId ? `${modalType}${modalId}` : undefined}>
          {children}
        </ModalBody>
        <ModalFooter>
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
                buttonCount={buttonCount}
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
                buttonCount={buttonCount}
              >
                {submitText}
              </Button>
            )}
          </Buttons>
        </ModalFooter>
      </Modal>
    </Container>
  );
};
