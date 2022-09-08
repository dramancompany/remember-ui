import React from 'react';
import type { CSSProperties } from 'react';

import { Container as ContainerDiv } from './Container.styles';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  direction?: CSSProperties['flexDirection'];
}

/** @deprecated */
export const Container = ({
  children,
  className,
  direction = 'column',
}: ContainerProps) => (
  <ContainerDiv className={className} direction={direction}>
    {children}
  </ContainerDiv>
);
