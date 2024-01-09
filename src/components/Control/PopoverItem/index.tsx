import React from 'react';
import type { MouseEventHandler } from 'react';

import { Container, Popover } from './PopoverItem.styles';

export interface PopoverProps {
  selected?: boolean;
  warning?: boolean;
  bold?: boolean;
}

export interface PopoverItemProps extends PopoverProps {
  children: React.ReactNode;
  onClick: MouseEventHandler;
  className?: string;
}

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const PopoverItem = ({
  children,
  selected = false,
  warning = false,
  bold = false,
  onClick,
  className,
}: PopoverItemProps) => (
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
