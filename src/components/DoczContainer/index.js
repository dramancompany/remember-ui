import React from 'react';

import { Container as ContainerDiv } from './DoczContainer.styles';

export const DoczContainer = ({ children, direction }) => {
  return <ContainerDiv direction={direction}>{children}</ContainerDiv>;
};
