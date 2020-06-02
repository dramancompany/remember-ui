import React, { useState, useEffect, useRef } from 'react';

import {
  Container,
  Inputs,
  Input,
  Divider,
  ErrorMsg,
} from './DoubleInput.styles';

export const DoubleInput = ({
  label1,
  label2 = ' ',
  value1,
  value2,
  name1,
  name2,
  placeholder1,
  placeholder2,
  onChange1,
  onChange2,
  validate,
  maxLength,
  onlyNumber,
  width,
  className,
}) => {
  const [error, setError] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    if (value1.length === maxLength) {
      inputRef.current.focus();
    }
  }, [value1, maxLength]);

  const _validate = (_value1, _value2) => {
    const _error = validate(_value1, _value2);
    setError(_error);
  };
  return (
    <Container width={width} className={className}>
      <Inputs onBlur={() => _validate(value1, value2)}>
        <Input
          name={name1}
          value={value1}
          onChange={onChange1}
          label={label1}
          placeholder={placeholder1}
          required
          errorMark={!!error}
          maxLength={maxLength}
          onlyNumber={onlyNumber}
          marginBottom={6}
        />
        <Divider>/</Divider>
        <Input
          outerRef={inputRef}
          name={name2}
          value={value2}
          onChange={onChange2}
          label={label2}
          placeholder={placeholder2}
          errorMark={!!error}
          maxLength={maxLength}
          onlyNumber={onlyNumber}
          marginBottom={6}
        />
      </Inputs>
      <ErrorMsg>{error}</ErrorMsg>
    </Container>
  );
};
