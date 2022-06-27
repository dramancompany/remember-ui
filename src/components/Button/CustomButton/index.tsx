import React from 'react';

import { Spinner } from '../../Spinner';

import { accent200 } from '../../../core/GlobalStyle';
import { Container, Inner } from './CustomButton.styles';
import type { CustomButtonProps } from './CustomButton.types';

export const CustomButton = ({
  className,
  disabled = false,
  onClick,
  customStyle = {
    fontWeight: 400,
    fontColor: 'white',
    borderColor: accent200,
    backgroundColor: accent200,
  },
  block = false,
  outline = false,
  size = 'small',
  isLoading = false,
  children,
  testId,
}: CustomButtonProps) => {
  const preventOnClick = disabled || isLoading;

  return (
    <Container
      className={className}
      size={size}
      customStyle={customStyle}
      outline={outline}
      disabled={disabled}
      onClick={preventOnClick ? undefined : onClick}
      isLoading={isLoading}
      data-testid={testId}
      block={block}
    >
      <Inner>
        {!isLoading && children}
        {isLoading && <Spinner width={18} height={18} borderWeight={3} />}
      </Inner>
    </Container>
  );
};
