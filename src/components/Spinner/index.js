import React from 'react';

import { Container } from './Spinner.styles';

export const Spinner = ({ width = 32, height = 32, borderWeight = 5 }) => (
  <Container width={width} height={height} borderWeight={borderWeight} />
);
