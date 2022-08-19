import React from 'react';
import type { CSSProperties } from 'react';

import { Container as ContainerDiv } from './Container.styles';

interface Props {
  children: React.ReactNode;
  className?: string;
  direction?: CSSProperties['flexDirection'];
}

/** @deprecated */
export const Container = ({
  children,
  className,
  direction = 'column',
}: Props) => {
  return (
    <ContainerDiv className={className} direction={direction}>
      {children}
    </ContainerDiv>
  );
};
