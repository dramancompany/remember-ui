import React, { ReactNode } from 'react';

import { enableBodyScrollLock } from '../../../utils/common';
import useScrollLock from '../../../hooks/useScrollLock';

import {
  Container,
  Modal,
  Header,
  Body,
  Footer,
  Button,
  HeaderLeft,
  HeaderLeftIcon,
  HeaderTitle,
  HeaderTitleText,
  HeaderSubTitle,
  HeaderSubTitleText,
  HeaderRight,
  HeaderRightButton,
  BodyMain,
} from './MobileFullModal.styles';

const modalType = 'mobileFullModal';

export interface MobileFullModalProps {
  isOpen?: boolean;
  isLoading?: boolean;
  delegateCloseControl?: boolean;
  submitButtonDisabled?: boolean;
  title: string;
  subTitle?: string;
  submitText?: string;
  topNavbarOffset?: string;
  headerButtonText?: string;
  bodyScrollLockTargetId?: string;
  onClose?: () => void;
  onAfterOpen?: () => void;
  onHeaderButtonClick?: () => void;
  submit?: () => void;
  children?: ReactNode;
}

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const MobileFullModal = ({
  topNavbarOffset = '0px',
  isOpen = false,
  onClose = () => {},
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
}: MobileFullModalProps) => {
  const { modalId, bodyScrollLockTarget } = useScrollLock(
    bodyScrollLockTargetId,
    modalType
  );

  return (
    <Container
      isOpen={isOpen}
      onClose={onClose}
      onAfterOpen={onAfterOpen}
      bodyScrollLockTarget={bodyScrollLockTarget}
    >
      <Modal topNavbarOffset={topNavbarOffset}>
        <Header>
          <HeaderLeft>
            <HeaderLeftIcon onClick={() => onClose()} />
          </HeaderLeft>
          <HeaderTitle>
            <HeaderTitleText>{title}</HeaderTitleText>
            {subTitle && (
              <HeaderSubTitle>
                (<HeaderSubTitleText>{subTitle}</HeaderSubTitleText>)
              </HeaderSubTitle>
            )}
          </HeaderTitle>
          <HeaderRight>
            <HeaderRightButton onClick={onHeaderButtonClick}>
              {headerButtonText}
            </HeaderRightButton>
          </HeaderRight>
        </Header>
        <Body id={modalId ? `${modalType}${modalId}` : undefined}>
          <BodyMain hasFooter={!!submit}>{children}</BodyMain>
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
                {submitText ?? ''}
              </Button>
            </Footer>
          )}
        </Body>
      </Modal>
    </Container>
  );
};
