import React, { ReactNode } from 'react';

import { enableBodyScrollLock } from '../../../utils/common';
import useScrollLock from '../../../hooks/useScrollLock';
import { BaseModalProps } from '../BaseModal';

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

const modalType = 'designedModal';

export interface DesignedModalProps
  extends Omit<
    BaseModalProps,
    'allowKeyExit' | 'bodyScrollLockTarget' | 'children'
  > {
  title?: string;
  subTitle?: string;
  customText?: ReactNode;
  submit?: () => void;
  close?: () => void;
  submitText?: string;
  closeText?: string;
  submitButtonDisabled?: boolean;
  headerButton?: ReactNode;
  isLoading?: boolean;
  width?: string | number;
  mobileWidth?: string | number;
  mobileHeight?: string | number;
  bodyScrollLockTargetId?: string | null;
  delegateCloseControl?: boolean;
  children?: ReactNode;
}

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
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
  width = '635px',
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
        $width={width}
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
                theme="secondary"
                size="xlarge"
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
                theme="primary"
                size="xlarge"
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
