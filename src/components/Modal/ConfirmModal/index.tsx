import React, { ReactNode } from 'react';

import { enableBodyScrollLock } from '../../../utils/common';
import useScrollLock from '../../../hooks/useScrollLock';
import { BaseModal, BaseModalProps } from '../BaseModal';
import { BaseButton } from '../../Buttons';
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

type DefaultTypeProps =
  | { confirmColor: 'red'; confirmText: '삭제' }
  | { confirmColor: 'yellow'; confirmText: '확인' };

const defaultTypeProps = (type: Type): DefaultTypeProps => {
  switch (type) {
    case 'delete':
      return { confirmColor: 'red', confirmText: '삭제' };
    case 'ok':
    default:
      return { confirmColor: 'yellow', confirmText: '확인' };
  }
};

const getIconSrc = (icon: IconType) => {
  switch (icon) {
    case 'warning':
      return warningIcon;
    case 'success':
    default:
      return successIcon;
  }
};

type IconType = 'warning' | 'success';
type Type = 'delete' | 'ok';

export interface ConfirmModalProps
  extends Omit<
    BaseModalProps,
    'allowKeyExit' | 'onAfterOpen' | 'bodyScrollLockTarget' | 'children'
  > {
  icon?: IconType;
  type?: Type;
  title?: string;
  message?: string;
  isOpen: boolean;
  showClose?: boolean;
  onOk?: () => void;
  okText?: string;
  closeText?: string;
  children?: ReactNode;
  onCloseAction?: () => void;
  mobileWidth?: string | number;
  mobileHeight?: string | number;
  bodyScrollLockTargetId?: string | null;
  delegateCloseControl?: boolean;
  testId?: string;
}

export const ConfirmModal = ({
  icon = 'success',
  title,
  message,
  type = 'ok',
  isOpen,
  isDraggable = false,
  isDragDisabled = false,
  isDragBounded = true,
  onClose = () => {},
  onOk = () => {},
  okText,
  closeText,
  showClose = true,
  children,
  onCloseAction = () => {},
  dragOnStart = () => {},
  dragOnStop = () => {},
  dragOnDrag = () => {},
  mobileWidth = '90vw',
  mobileHeight,
  bodyScrollLockTargetId,
  delegateCloseControl = false,
  testId,
}: ConfirmModalProps) => {
  const { confirmColor, confirmText } = defaultTypeProps(type);
  const { modalId, bodyScrollLockTarget } = useScrollLock(
    bodyScrollLockTargetId,
    modalType
  );

  const _onOk = () => {
    enableBodyScrollLock(bodyScrollLockTarget, delegateCloseControl);
    onOk();
    return Promise.resolve();
  };

  const _onClose = () => {
    enableBodyScrollLock(bodyScrollLockTarget, delegateCloseControl);
    onCloseAction();
    return Promise.resolve();
  };

  return (
    <BaseModal
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
        <Body id={modalId ? `${modalType}${modalId}` : undefined}>
          {icon && <Icon src={getIconSrc(icon)} alt="icon" />}
          {title && <TitleText hasIcon={!!icon}>{title}</TitleText>}
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
                _onClose().then(() => {
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
              _onOk().then(() => {
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
