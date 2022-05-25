import React from 'react';
import type { MouseEventHandler } from 'react';

import { Container, ChipContent } from './Chip.styles';

interface Props {
  children: React.ReactNode;
  className: string;
  isOverflowed: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export const Chip = ({
  children,
  className,
  isOverflowed = false,
  onClick = () => {},
}: Props) => (
  <Container
    className={className}
    isOverflowed={isOverflowed}
    onClick={onClick}
  >
    <ChipContent isOverflowed={isOverflowed}>{children}</ChipContent>
  </Container>
);
