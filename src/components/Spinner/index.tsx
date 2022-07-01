import React from 'react';

import { Container } from './Spinner.styles';

export interface Props {
  width?: number;
  height?: number;
  borderWeight?: number;
  theme?: 'white' | 'gray';
  className?: string;
}

export const Spinner = ({
  width = 32,
  height = 32,
  borderWeight = 5,
  theme = 'gray',
  className,
}: Props) => (
  <Container
    className={className}
    width={width}
    height={height}
    borderWeight={borderWeight}
    theme={theme}
  />
);
