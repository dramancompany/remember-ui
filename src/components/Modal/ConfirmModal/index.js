import React, { useState, useEffect, useCallback } from 'react';
import { enableBodyScroll } from 'body-scroll-lock';

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
  mobileWidth = '100vw',
  mobileHeight,
  bodyScrollLockTargetId,
  delegateCloseControl = false,
}) => {
  const { confirmColor, confirmText } = defaultTypeProps(type);
  const [modalId, setModalId] = useState(null);
  const [bodyScrollLockTarget, setBodyScrollLockTarget] = useState(null);

  useEffect(() => {
    const id = Math.floor(Math.random() * 1000);
    setModalId(id);
    const target = bodyScrollLockTargetId
      ? `#${bodyScrollLockTargetId}`
      : `#confirmModal${id}`;
    setBodyScrollLockTarget(target);
  }, [bodyScrollLockTargetId]);

  const enableBodyScrollLock = useCallback(() => {
    if (!delegateCloseControl && bodyScrollLockTarget) {
      enableBodyScroll(document.querySelector(bodyScrollLockTarget));
    }
  }, [delegateCloseControl, bodyScrollLockTarget]);

  const _onOk = useCallback(
    (onOk) => {
      enableBodyScrollLock();
      onOk();
      return Promise.resolve();
    },
    [enableBodyScrollLock]
  );

  const _onClose = useCallback(
    (onCloseAction) => {
      enableBodyScrollLock();
      onCloseAction && onCloseAction();
      return Promise.resolve();
    },
    [enableBodyScrollLock]
  );
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
        <Body id={modalId && `confirmModal${modalId}`}>
          {icon && <Icon src={getIconSrc(icon)} alt="icon" />}
          {title && <TitleText hasIcon={icon}>{title}</TitleText>}
          {message && <MessageText>{message}</MessageText>}
          {children}
        </Body>
        <Footer showClose={showClose}>
          {showClose && (
            <BaseButton
              className="footer--btn not-draggable"
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
