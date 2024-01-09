import React from 'react';

import { Spinner } from '../../Common/Spinner';
import { accent200 } from '../../../core/GlobalStyle';
import type { CustomButtonProps } from './CustomButton.types';

import { Container, Inner } from './CustomButton.styles';

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
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
