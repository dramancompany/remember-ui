import React from 'react';

import { Container } from './Chip.styles';

export const Chip = ({ children, isOverflowed = false }) => {
  return <Container isOverflowed={isOverflowed}>{children}</Container>;
};
