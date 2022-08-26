import React from 'react';
import type { CSSProperties } from 'react';

import { Container as ContainerDiv } from './DoczContainer.styles';

interface DoczContainerProps {
  children: React.ReactNode;
  className?: string;
  direction: CSSProperties['flexDirection'];
}

export const DoczContainer = ({
  children,
  direction,
  className,
}: DoczContainerProps) => {
  return (
    <ContainerDiv className={className} direction={direction}>
      {children}
    </ContainerDiv>
  );
};
