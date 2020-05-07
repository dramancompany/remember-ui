import React from 'react';

import { Container, Popover } from './PopoverItem.styles';

export const PopoverItem = ({
  children,
  selected = false,
  warning = false,
  bold = false,
  onClick,
  className,
}) => {
  return (
    <Container onClick={onClick}>
      <Popover
        className={className}
        selected={selected}
        warning={warning}
        bold={bold}
      >
        {children}
      </Popover>
    </Container>
  );
};
