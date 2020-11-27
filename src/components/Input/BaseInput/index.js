import React, { useState } from 'react';

import { handleInputLength } from '../../../utils/string';

import { requiredIcon } from '../../../assets';
import {
  Container,
  Label,
  Mark,
  ErrorMessage,
  Input,
} from './BaseInput.styles';

export const BaseInput = ({
  value,
  name,
  onChange,
  onClick,
  placeholder,
  label,
  autoFocus,
  required,
  disabled,
  className,
  onEnter,
  // error만 있어도 되지만 다른 DcNewInput을 사용한 곳에 margin 대응을 위해 넣음
  useError,
  errorMark,
  footer,
  validate,
  maxLength,
  onlyNumber,
  type = 'text',
  blankLabel = false,
  readOnly = false,
  marginBottom,
  outerRef,
  onKeyPress,
  onKeyDown,
  enableKeyDown = false,
  ...rest
}) => {
  const [error, setError] = useState('');

  const _validate = () => {
    const error = validate(value);
    setError(error);
  };

  const _onChange = (e) => {
    if (onlyNumber && e.target.value !== '' && !/^\d+$/.test(e.target.value))
      return;
    if (maxLength) return handleInputLength(onChange, e, maxLength);
    onChange(e);
  };

  const _onKeyPress = (event) => {
    if (onKeyPress) {
      onKeyPress(event);
    } else if (onKeyDown) {
      onKeyDown(event);
    } else {
      if (event.key === 'Enter') {
        onEnter && onEnter();
      }
    }
  };

  return (
    <Container className={className}>
      {(label || blankLabel) && (
        <Label marginBottom={marginBottom}>
          <span>{label}</span>
          {required && <Mark src={requiredIcon} alt="mark" />}
        </Label>
      )}
      <Input
        ref={outerRef}
        error={!!error || errorMark}
        footer={!!footer}
        disable={disabled}
        value={value}
        type={type}
        name={name}
        onChange={_onChange}
        onClick={onClick}
        placeholder={placeholder}
        autoFocus={autoFocus}
        readOnly={readOnly || disabled}
        onBlur={validate && _validate}
        onKeyPress={!enableKeyDown && _onKeyPress}
        onKeyDown={enableKeyDown && _onKeyPress}
        {...rest}
      />

      {footer}
      {useError && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
