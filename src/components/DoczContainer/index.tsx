import React from 'react';
import type { CSSProperties } from 'react';

import { Container as ContainerDiv } from './DoczContainer.styles';

export interface Props {
  children: React.ReactNode;
  className?: string;
  direction: CSSProperties['flexDirection'];
}

export const DoczContainer = ({ children, direction, className }: Props) => {
  return (
    <ContainerDiv className={className} direction={direction}>
      {children}
    </ContainerDiv>
  );
};
