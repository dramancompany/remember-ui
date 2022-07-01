import React, {
  ChangeEventHandler,
  KeyboardEvent,
  MouseEventHandler,
  ReactNode,
  RefObject,
  useState,
} from 'react';
import type { MaskedInputProps } from 'react-text-mask';

import { requiredIcon } from '../../../assets';

import {
  Container,
  Label,
  Mark,
  ErrorMessage,
  Input,
} from './MaskingInput.styles';

interface Props {
  name?: string;
  value?: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  outerRef?: RefObject<HTMLInputElement>;
  footer?: ReactNode;
  placeholder?: string;
  maxLength?: number;
  marginBottom?: number;
  type?: string;
  label?: string;
  className?: string;
  autoFocus?: boolean;
  required?: boolean;
  disabled?: boolean;
  useError?: boolean;
  errorMark?: boolean;
  onlyNumber?: boolean;
  blankLabel?: boolean;
  readOnly?: boolean;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onEnter?: VoidFunction;
  validate?: (value?: string | number) => string;
  mask: MaskedInputProps['mask'];
}

export const MaskingInput = ({
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
  type = 'text',
  mask = false,
  blankLabel = false,
  marginBottom,
}: Props) => {
  const [error, setError] = useState('');
  const _validate = () => {
    if (validate) {
      setError(validate(value));
    }
  };

  return (
    <Container className={className}>
      {(label || blankLabel) && (
        <Label $marginBottom={marginBottom}>
          <span>{label}</span>
          {required && <Mark src={requiredIcon} alt="mark" />}
        </Label>
      )}

      <Input
        guide={false}
        mask={mask}
        error={!!error || errorMark}
        value={value}
        type={type}
        name={name}
        onChange={onChange}
        onClick={onClick}
        placeholder={placeholder}
        autoFocus={autoFocus}
        readOnly={disabled}
        onBlur={validate && _validate}
        onKeyPress={({ key }: KeyboardEvent<HTMLInputElement>) => {
          if (key === 'Enter') {
            onEnter && onEnter();
          }
        }}
      />

      {footer}
      {useError && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
