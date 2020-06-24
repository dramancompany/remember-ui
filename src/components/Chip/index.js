import React from 'react';

import { Container, ChipContent } from './Chip.styles';

export const Chip = ({ children, className, isOverflowed = false }) => (
  <Container className={className} isOverflowed={isOverflowed}>
    <ChipContent isOverflowed={isOverflowed}>{children}</ChipContent>
  </Container>
);
