import React from 'react';

import { Container as ContainerDiv } from './DoczContainer.styles';

export const DoczContainer = ({ children, direction, className }) => {
  return (
    <ContainerDiv className={className} direction={direction}>
      {children}
    </ContainerDiv>
  );
};
