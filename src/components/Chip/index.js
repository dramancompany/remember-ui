import React from 'react';

import { Container, ChipContent } from './Chip.styles';

export const Chip = ({
  children,
  className,
  isOverflowed = false,
  onClick = () => {},
}) => (
  <Container
    className={className}
    isOverflowed={isOverflowed}
    onClick={onClick}
  >
    <ChipContent isOverflowed={isOverflowed}>{children}</ChipContent>
  </Container>
);
