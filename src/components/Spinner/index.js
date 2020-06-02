import React from 'react';

import { Container } from './Spinner.styles';

export const Spinner = ({
  width = 32,
  height = 32,
  borderWeight = 5,
  className,
}) => (
  <Container
    className={className}
    width={width}
    height={height}
    borderWeight={borderWeight}
  />
);
