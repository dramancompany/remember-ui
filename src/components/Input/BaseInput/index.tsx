import {
  ChangeEventHandler,
  InputHTMLAttributes,
  ReactNode,
  RefObject,
  useState,
} from 'react';

import { handleInputLength } from '../../../utils/string';

import {
  Container,
  ErrorMessage,
  Input,
  Label,
  RequiredMark,
} from './BaseInput.styles';

interface CustomInputProps<T extends string | number> {
  value?: T;
  onChange: ChangeEventHandler<HTMLInputElement>;
  outerRef?: RefObject<HTMLInputElement>;
  footer?: ReactNode;
  marginBottom?: number;
  useError?: boolean;
  errorMark?: boolean;
  onlyNumber?: boolean;
  blankLabel?: boolean;
  onEnter?: VoidFunction;
  label?: string;
  validate?: (value?: T) => string;
}

export type BaseInputProps<T extends string | number> = CustomInputProps<T> &
  InputHTMLAttributes<HTMLInputElement>;

export const BaseInput = <T extends string | number = string>({
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
  ...rest
}: BaseInputProps<T>) => {
  const [error, setError] = useState('');

  const _validate = () => {
    if (validate) {
      const e = validate(value);
      setError(e);
    }
  };

  const _onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onlyNumber && e.target.value !== '' && !/^\d+$/.test(e.target.value))
      return;
    if (maxLength) return handleInputLength(onChange, e, maxLength);
    onChange(e);
  };

  return (
    <Container className={className}>
      {(label || blankLabel) && (
        <Label $marginBottom={marginBottom}>
          <span>{label}</span>
          {required && <RequiredMark>*</RequiredMark>}
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
        onKeyPress={({ key }) => {
          if (key === 'Enter') {
            onEnter && onEnter();
          }
        }}
        {...rest}
      />

      {footer}
      {useError && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
