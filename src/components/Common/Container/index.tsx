import React from 'react';
import type { CSSProperties } from 'react';

import { Container as ContainerDiv } from './Container.styles';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  direction?: CSSProperties['flexDirection'];
}

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const Container = ({
  children,
  className,
  direction = 'column',
}: ContainerProps) => (
  <ContainerDiv className={className} direction={direction}>
    {children}
  </ContainerDiv>
);
