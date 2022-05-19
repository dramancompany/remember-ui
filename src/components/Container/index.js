import React from 'react';

import { Container as ContainerDiv } from './Container.styles';

/** @deprecated */
export const Container = ({ children, className, direction }) => {
  return (
    <ContainerDiv className={className} direction={direction}>
      {children}
    </ContainerDiv>
  );
};