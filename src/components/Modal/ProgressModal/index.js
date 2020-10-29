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
  isDragBounded = true,
  dragOnStart = () => {},
  dragOnStop = () => {},
  dragOnDrag = () => {},
  mobileWidth = '90vw',
  mobileHeight,
}) => (
  <BaseModal
    className={className}
    isOpen={isOpen}
    allowKeyExit={false}
    isDraggable={isDraggable}
    isDragBounded={isDragBounded}
    dragOnStart={dragOnStart}
    dragOnStop={dragOnStop}
    dragOnDrag={dragOnDrag}
  >
    <Container mobileWidth={mobileWidth} mobileHeight={mobileHeight}>
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
