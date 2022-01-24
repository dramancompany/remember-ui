import React, { useRef } from 'react';
import { yellow100 } from '../../../core/GlobalStyle';

import { createUUID } from '../../../utils/common';

import { Container, Input, Label, Span } from './Switch.styles';

const isHexColorCode = (color) => /^#([0-9a-f]{3}){1,2}$/i.test(color);

export const Switch = ({
  className,
  checked,
  onClick,
  size = 'small',
  color = yellow100,
}) => {
  const { current: target } = useRef(createUUID());
  const _color = isHexColorCode(color) ? color : yellow100;

  return (
    <Container className={className}>
      <Input
        id={target}
        type="checkbox"
        checked={checked}
        onChange={onClick}
        size={size}
      />
      <Label htmlFor={target} checked={checked} size={size} color={_color}>
        <Span size={size} />
      </Label>
    </Container>
  );
};
