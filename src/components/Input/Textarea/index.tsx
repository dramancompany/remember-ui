import React, { MouseEventHandler, ReactNode, RefObject, useRef } from 'react';

import useCustomSetInput from '../../../hooks/useCustomSetInput';

import {
  Container,
  Label,
  Max,
  Notice,
  Progress,
  RequiredMark,
  Text,
  TextCount,
  Title,
} from './Textarea.styles';

export interface TextareaProps {
  name?: string;
  value?: string;
  onChange: (value: string) => void;
  outerRef?: RefObject<HTMLTextAreaElement>;
  footer?: ReactNode;
  placeholder?: string;
  maxLength?: number;
  type?: string;
  label?: string;
  className?: string;
  required?: boolean;
  blankLabel?: boolean;
  readOnly?: boolean;
  validate?: (value?: string | number) => string;
  first?: boolean;
  countLength?: boolean;
  textareaOnClick?: MouseEventHandler<HTMLTextAreaElement>;
  resize?: boolean;
}

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const Textarea = ({
  outerRef,
  value = '',
  /** 해당 props는 textarea에 attributes에 없으므로 삭제되어야한다 - 20220908 */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  countLength = false,
  textareaOnClick = () => {},
  resize = false,
}: TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const _onChange = useCustomSetInput(
    outerRef || textareaRef,
    value,
    onChange,
    maxLength
  );

  return (
    <Container>
      {(label || blankLabel) && (
        <Label>
          <Title>{label}</Title>
          {required && <RequiredMark />}
          {first && <Notice>* 필수항목</Notice>}
        </Label>
      )}
      <Text
        ref={outerRef || textareaRef}
        className={className}
        value={value}
        name={name}
        onChange={_onChange}
        maxLength={maxLength}
        placeholder={placeholder}
        onClick={textareaOnClick}
        resize={resize}
      />
      {countLength && (
        <TextCount>
          <Progress inProgress={value.length > 0}>
            {(value && value.length) || 0}
          </Progress>
          <Max>/{maxLength}자</Max>
        </TextCount>
      )}
    </Container>
  );
};
