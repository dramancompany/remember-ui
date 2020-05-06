import React from 'react';

import { handleInputLength } from '../../../utils';

import { Container, Label, Text } from './Textarea.styles';

export const Textarea = ({
  value,
  type,
  name,
  onChange,
  placeholder,
  label,
  required,
  first,
  className,
  maxLength,
  blankLabel = false,
}) => {
  const _onChange = e => {
    if (maxLength) return handleInputLength(onChange, e, maxLength);
    onChange(e);
  };

  return (
    <Container>
      {(label || blankLabel) && (
        <Label>
          <Label.Title>{label}</Label.Title>
          {required && <Label.Icon />}
          {first && <Label.Notice>* 필수항목</Label.Notice>}
        </Label>
      )}
      <Text
        className={className}
        value={value}
        type={type}
        name={name}
        onChange={_onChange}
        placeholder={placeholder}
      />
    </Container>
  );
};
