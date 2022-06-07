import React, { ReactNode } from 'react';

import { Content, Body, Buttons, CancelButton } from './MessageModal.styles';
import { NewBaseButton } from '../../Button';
import { BaseModal } from '../BaseModal';

interface Props {
  isOpen: boolean;
  isLoading?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose: () => void;
  confirmText?: string;
  cancelText?: string;
  children?: ReactNode;
}

export const MessageModal = ({
  isOpen,
  children,
  onConfirm,
  onCancel,
  onClose,
  confirmText,
  cancelText,
  isLoading = false,
}: Props) => {
  return (
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
};
