import React from 'react';

import { BaseModal } from '../BaseModal';

import {
  Container,
  Body,
  Icon,
  ProgressBar,
  TitleText,
  MessageText,
} from './ProgressModal.styles';

export const ProgressModal = ({
  icon,
  title,
  currentCount = 0,
  totalCount = 1,
  message,
  isOpen,
  className,
  isDraggable = false,
}) => (
  <BaseModal
    className={className}
    isOpen={isOpen}
    allowKeyExit={false}
    isDraggable={isDraggable}
  >
    <Container>
      <Body>
        {icon && <Icon src={icon} alt="icon" />}
        {title && (
          <TitleText hasIcon={icon}>
            {title(currentCount, totalCount)}
          </TitleText>
        )}
        {message && <MessageText>{message}</MessageText>}
      </Body>
      <ProgressBar>
        <ProgressBar.Filler percentage={(currentCount / totalCount) * 100} />
      </ProgressBar>
    </Container>
  </BaseModal>
);
