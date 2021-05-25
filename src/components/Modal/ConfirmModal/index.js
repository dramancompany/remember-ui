import React from 'react';
import { enableBodyScrollLock } from '../../../utils/common';
import useScrollLock from '../../../hooks/useScrollLock';

import { BaseModal } from '../BaseModal';
import { BaseButton } from '../../Button';
import { successIcon, warningIcon } from '../../../assets';

import {
  Container,
  Body,
  Icon,
  Footer,
  TitleText,
  MessageText,
} from './ConfirmModal.styles';

const modalType = 'confirmModal';
const defaultTypeProps = (type) => {
  switch (type) {
    case 'delete':
      return { confirmColor: 'red', confirmText: '삭제' };
    case 'ok':
    default:
      return { confirmColor: 'yellow', confirmText: '확인' };
  }
};

const getIconSrc = (icon) => {
  switch (icon) {
    case 'warning':
      return warningIcon;
    case 'success':
    default:
      return successIcon;
  }
};

export const ConfirmModal = ({
  icon,
  title,
  message,
  type = 'ok',
  isOpen,
  isDraggable = false,
  isDragDisabled = false,
  isDragBounded = true,
  onClose = () => {},
  onOk = '확인',
  okText,
  closeText,
  showClose = true,
  children,
  onCloseAction,
  className,
  dragOnStart = () => {},
  dragOnStop = () => {},
  dragOnDrag = () => {},
  mobileWidth = '90vw',
  mobileHeight,
  bodyScrollLockTargetId,
  delegateCloseControl = false,
  testId,
}) => {
  const { confirmColor, confirmText } = defaultTypeProps(type);
  const { modalId, bodyScrollLockTarget } = useScrollLock(
    bodyScrollLockTargetId,
    modalType
  );

  const _onOk = (onOk) => {
    enableBodyScrollLock(bodyScrollLockTarget, delegateCloseControl);
    onOk();
    return Promise.resolve();
  };

  const _onClose = (onCloseAction) => {
    enableBodyScrollLock(bodyScrollLockTarget, delegateCloseControl);
    onCloseAction && onCloseAction();
    return Promise.resolve();
  };

  return (
    <BaseModal
      className={className}
      isOpen={isOpen}
      onClose={onClose}
      allowKeyExit={false}
      isDraggable={isDraggable}
      isDragDisabled={isDragDisabled}
      isDragBounded={isDragBounded}
      dragOnStart={dragOnStart}
      dragOnStop={dragOnStop}
      dragOnDrag={dragOnDrag}
      bodyScrollLockTarget={bodyScrollLockTarget}
    >
      <Container mobileWidth={mobileWidth} mobileHeight={mobileHeight}>
        <Body id={modalId && `${modalType}${modalId}`}>
          {icon && <Icon src={getIconSrc(icon)} alt="icon" />}
          {title && <TitleText hasIcon={icon}>{title}</TitleText>}
          {message && <MessageText>{message}</MessageText>}
          {children}
        </Body>
        <Footer showClose={showClose}>
          {showClose && (
            <BaseButton
              className="footer--btn not-draggable"
              testId={`${testId}-cancel`}
              color="gray"
              fill
              size="large"
              onClick={() =>
                _onClose(onCloseAction).then(() => {
                  onClose();
                })
              }
            >
              {closeText || '취소'}
            </BaseButton>
          )}
          <BaseButton
            color={confirmColor}
            fill
            size="large"
            className="footer--btn not-draggable"
            testId={`${testId}-confirm`}
            onClick={() =>
              _onOk(onOk).then(() => {
                onClose();
              })
            }
          >
            {okText || confirmText}
          </BaseButton>
        </Footer>
      </Container>
    </BaseModal>
  );
};
