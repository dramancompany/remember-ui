import React from 'react';
import type { MouseEventHandler } from 'react';

import { Container, ChipContent } from './Chip.styles';

export interface ChipProps {
  children: React.ReactNode;
  className?: string;
  isOverflowed?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const Chip = ({
  children,
  className,
  isOverflowed = false,
  onClick = () => {},
}: ChipProps) => (
  <Container
    className={className}
    isOverflowed={isOverflowed}
    onClick={onClick}
  >
    <ChipContent isOverflowed={isOverflowed}>{children}</ChipContent>
  </Container>
);
