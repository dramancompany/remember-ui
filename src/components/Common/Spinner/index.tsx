import React from 'react';

import { Container } from './Spinner.styles';

export interface SpinnerProps {
  width?: number;
  height?: number;
  borderWeight?: number;
  theme?: 'white' | 'gray';
  className?: string;
}

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const Spinner = ({
  width = 32,
  height = 32,
  borderWeight = 5,
  theme = 'gray',
  className,
}: SpinnerProps) => (
  <Container
    className={className}
    width={width}
    height={height}
    borderWeight={borderWeight}
    theme={theme}
  />
);
