import React from 'react';

import { Container } from './Chip.styles';

export const Chip = ({ children, className, isOverflowed = false }) => (
  <Container className={className} isOverflowed={isOverflowed}>
    {children}
  </Container>
);
