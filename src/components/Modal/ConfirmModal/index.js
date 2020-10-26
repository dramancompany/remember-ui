import React from 'react';

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

function defaultTypeProps(type) {
  switch (type) {
    case 'delete':
      return { confirmColor: 'red', confirmText: '삭제' };
    case 'ok':
    default:
      return { confirmColor: 'yellow', confirmText: '확인' };
  }
}

function getIconSrc(icon) {
  switch (icon) {
    case 'warning':
      return warningIcon;
    case 'success':
    default:
      return successIcon;
  }
}

function _onOk(onOk) {
  onOk();
  return Promise.resolve();
}

function _onClose(onCloseAction) {
  onCloseAction && onCloseAction();
  return Promise.resolve();
}

export const ConfirmModal = ({
  icon,
  title,
  message,
  type = 'ok',
  isOpen,
  isDraggable = false,
  onClose = () => {},
  onOk = '확인',
  okText,
  closeText,
  showClose = true,
  children,
  onCloseAction,
  className,
}) => {
  const { confirmColor, confirmText } = defaultTypeProps(type);

  return (
    <BaseModal
      className={className}
      isOpen={isOpen}
      onClose={onClose}
      allowKeyExit={false}
      isDraggable={isDraggable}
    >
      <Container>
        <Body>
          {icon && <Icon src={getIconSrc(icon)} alt="icon" />}
          {title && <TitleText hasIcon={icon}>{title}</TitleText>}
          {message && <MessageText>{message}</MessageText>}
          {children}
        </Body>
        <Footer showClose={showClose}>
          {showClose && (
            <BaseButton
              className="footer--btn"
              color="gray"
              fill
              size="large"
              onClick={() => _onClose(onCloseAction).then(onClose)}
            >
              {closeText || '취소'}
            </BaseButton>
          )}
          <BaseButton
            color={confirmColor}
            fill
            size="large"
            className="footer--btn"
            onClick={() => _onOk(onOk).then(onClose)}
          >
            {okText || confirmText}
          </BaseButton>
        </Footer>
      </Container>
    </BaseModal>
  );
};
