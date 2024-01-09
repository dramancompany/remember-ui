import React, { ReactNode } from 'react';

import { NewBaseButton } from '../../Buttons';
import { BaseModal } from '../BaseModal';

import { Content, Body, Buttons, CancelButton } from './MessageModal.styles';

export interface MessageModalProps {
  isOpen: boolean;
  isLoading?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose: () => void;
  confirmText?: string;
  cancelText?: string;
  children?: ReactNode;
}

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const MessageModal = ({
  isOpen,
  children,
  onConfirm,
  onCancel,
  onClose,
  confirmText,
  cancelText,
  isLoading = false,
}: MessageModalProps) => (
  <BaseModal isOpen={isOpen}>
    <Content>
      <Body>{children}</Body>
      <Buttons>
        {onConfirm && (
          <CancelButton
            onClick={() => {
              if (onCancel) {
                onCancel();
              }
              onClose();
            }}
            theme="light"
            outline
            size="large"
            block
          >
            {cancelText || '취소'}
          </CancelButton>
        )}
        <NewBaseButton
          onClick={() => {
            if (onConfirm) {
              onConfirm();
            }
            onClose();
          }}
          theme="primary"
          size={onConfirm === undefined ? 'xlarge' : 'large'}
          block
          isLoading={isLoading}
        >
          {confirmText || '확인'}
        </NewBaseButton>
      </Buttons>
    </Content>
  </BaseModal>
);
