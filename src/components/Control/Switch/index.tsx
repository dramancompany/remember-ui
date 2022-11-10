import React, { ChangeEventHandler, useRef } from 'react';

import { secondary100 } from '../../../core/GlobalStyle';
import { createUUID } from '../../../utils/common';

import { Container, Input, Label, Span } from './Switch.styles';

const isHexColorCode = (color: string) => /^#([0-9a-f]{3}){1,2}$/i.test(color);

export type SwitchSize = 'small' | 'large';

export interface SwitchProps {
  className?: string;
  checked?: boolean;
  onClick: ChangeEventHandler<HTMLInputElement>;
  size?: SwitchSize;
  color?: string;
}

export const Switch = ({
  className,
  checked,
  onClick,
  size = 'small',
  color = secondary100,
}: SwitchProps) => {
  const { current: target } = useRef(createUUID());
  const _color = isHexColorCode(color) ? color : secondary100;

  return (
    <Container className={className}>
      <Input
        id={target}
        type="checkbox"
        checked={checked}
        onChange={onClick}
        $size={size}
      />
      <Label htmlFor={target} checked={checked} size={size} color={_color}>
        <Span size={size} />
      </Label>
    </Container>
  );
};
