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
  topNavbarOffset = '0px',

  isOpen,
  onClose,
  onAfterOpen = () => {},

  title,
  subTitle = '',
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
            <Header.Left.Icon onClick={() => onClose()} />
          </Header.Left>
          <Header.Title>
            <Header.Title.Text>{title}</Header.Title.Text>
            {subTitle && (
              <Header.SubTitle>
                (<Header.SubTitle.Text>{subTitle}</Header.SubTitle.Text>)
              </Header.SubTitle>
            )}
          </Header.Title>
          <Header.Right>
            <Header.Right.Button onClick={onHeaderButtonClick}>
              {headerButtonText}
            </Header.Right.Button>
          </Header.Right>
        </Header>
        <Body
          id={modalId && `${modalType}${modalId}`}
          topNavbarOffset={topNavbarOffset}
        >
          <Body.Main hasFooter={!!submit}>{children}</Body.Main>
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
        </Body>
      </Modal>
    </Container>
  );
};
