import React from 'react';

import { Spinner } from '../../Spinner';

import { Container, Inner } from './CustomButton.styles';
import { yellow100 } from '../../../core/GlobalStyle';

export const CustomButton = ({
  className = '',
  disabled = false,
  onClick = () => {},
  customStyle = {
    fontWeight: 400,
    fontColor: 'white',
    borderColor: yellow100,
    backgroundColor: yellow100,
  },
  outline = false,
  size = 'small',
  isLoading = false,
  children,
  testId,
}) => {
  const _onClick = e => {
    if (disabled) return;
    if (isLoading) return;
    onClick(e);
  };

  return (
    <Container
      className={className}
      size={size}
      customStyle={customStyle}
      outline={outline}
      disabled={disabled}
      onClick={_onClick}
      isLoading={isLoading}
      data-testid={testId}
    >
      <Inner size={size}>
        {!isLoading && children}
        {isLoading && <Spinner width={18} height={18} borderWeight={3} />}
      </Inner>
    </Container>
  );
};
