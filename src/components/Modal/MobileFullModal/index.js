import React from 'react';
import { enableBodyScrollLock } from '../../../utils/common';
import useScrollLock from '../../../hooks/useScrollLock';

import {
  Container,
  Modal,
  Header,
  Body,
  Footer,
  Button,
} from './MobileFullModal.styles';

const modalType = 'mobileFullModal';

export const MobileFullModal = ({
  topNavbarOffset = '48px',

  isOpen,
  onClose,
  onAfterOpen = () => {},

  title,
  headerButtonText = '',
  onHeaderButtonClick = () => {},
  submit,
  submitText,
  submitButtonDisabled = false,

  isLoading = false,
  bodyScrollLockTargetId,
  delegateCloseControl = false,
  children,
  className,
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
      bodyScrollLockTarget={bodyScrollLockTarget}
    >
      <Modal topNavbarOffset={topNavbarOffset}>
        <Header>
          <Header.Left>
            <Header.Left.Icon onClick={onClose} />
          </Header.Left>
          <Header.Title>{title}</Header.Title>
          <Header.Right>
            <Header.Right.Button onClick={onHeaderButtonClick}>
              {headerButtonText}
            </Header.Right.Button>
          </Header.Right>
        </Header>
        <Body
          id={modalId && `${modalType}${modalId}`}
          topNavbarOffset={topNavbarOffset}
          hasFooter={!!submit}
        >
          {children}
        </Body>
        {submit && (
          <Footer>
            <Button
              className="not-draggable"
              theme="yellow"
              size="large"
              block
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
          </Footer>
        )}
      </Modal>
    </Container>
  );
};
