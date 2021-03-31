import React, { useRef } from 'react';

import { createUUID } from '../../../utils/common';

import { Container, Input, Label, Span } from './Switch.styles';

export const Switch = ({ className, checked, onClick, size = 'small' }) => {
  const { current: target } = useRef(createUUID());

  return (
    <Container className={className}>
      <Input
        id={target}
        type="checkbox"
        checked={checked}
        onChange={onClick}
        size={size}
      />
      <Label htmlFor={target} checked={checked} size={size}>
        <Span size={size} />
      </Label>
    </Container>
  );
};
