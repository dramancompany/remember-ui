import React from 'react';
import type { MouseEventHandler } from 'react';

import { Container, Popover } from './PopoverItem.styles';

export interface PopoverProps {
  selected?: boolean;
  warning?: boolean;
  bold?: boolean;
}

interface Props extends PopoverProps {
  children: React.ReactNode;
  onClick: MouseEventHandler;
  className?: string;
}

export const PopoverItem = ({
  children,
  selected = false,
  warning = false,
  bold = false,
  onClick,
  className,
}: Props) => {
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
