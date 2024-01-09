import React, { ReactNode } from 'react';

import { BaseModal } from '../BaseModal';

import {
  Container,
  Body,
  Icon,
  ProgressBar,
  TitleText,
  MessageText,
  ProgressBarFiller,
} from './ProgressModal.styles';

export interface ProgressModalProps {
  isOpen: boolean;
  isDraggable?: boolean;
  isDragBounded?: boolean;
  icon?: string;
  message?: string;
  title?: (currentCount: number, totalCount: number) => ReactNode;
  totalCount?: number;
  currentCount?: number;
  mobileWidth?: string | number;
  mobileHeight?: string | number;
  dragOnStart?: () => void;
  dragOnStop?: () => void;
  dragOnDrag?: () => void;
}

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const ProgressModal = ({
  icon,
  title,
  currentCount = 0,
  totalCount = 1,
  message,
  isOpen,
  isDraggable = false,
  isDragBounded = true,
  dragOnStart = () => {},
  dragOnStop = () => {},
  dragOnDrag = () => {},
  mobileWidth = '90vw',
  mobileHeight,
}: ProgressModalProps) => (
  <BaseModal
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
          <TitleText hasIcon={!!icon}>
            {title(currentCount, totalCount)}
          </TitleText>
        )}
        {message && <MessageText>{message}</MessageText>}
      </Body>
      <ProgressBar>
        <ProgressBarFiller percentage={(currentCount / totalCount) * 100} />
      </ProgressBar>
    </Container>
  </BaseModal>
);
