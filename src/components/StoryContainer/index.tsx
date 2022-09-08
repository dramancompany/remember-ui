import React from 'react';
import type { CSSProperties } from 'react';

import { Container as ContainerDiv } from './StoryContainer.styles';

interface StoryContainerProps {
  children: React.ReactNode;
  className?: string;
  direction: CSSProperties['flexDirection'];
}

export const StoryContainer = ({
  children,
  direction,
  className,
}: StoryContainerProps) => (
  <ContainerDiv className={className} direction={direction}>
    {children}
  </ContainerDiv>
);
