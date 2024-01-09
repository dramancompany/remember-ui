import React from 'react';

import { Spinner } from '../../Common/Spinner';
import type { NewBaseButtonProps } from './NewBaseButton.types';

import { Container, Inner } from './NewBaseButton.styles';

export * from './NewBaseButton.types';

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const NewBaseButton = ({
  className,
  disabled = false,
  onClick,
  theme = 'primary',
  outline = false,
  size = 'small',
  isLoading = false,
  block = false,
  children,
  testId,
}: NewBaseButtonProps) => {
  const preventOnClick = disabled || isLoading;
  const spinnerTheme = theme === 'primary' && !outline ? 'white' : 'gray';

  return (
    <Container
      className={className}
      size={size}
      buttonTheme={theme}
      outline={outline}
      disabled={disabled}
      block={block}
      onClick={preventOnClick ? undefined : onClick}
      isLoading={isLoading}
      data-testid={testId}
    >
      <Inner>
        {isLoading ? (
          <Spinner
            width={18}
            height={18}
            borderWeight={3}
            theme={spinnerTheme}
          />
        ) : (
          children
        )}
      </Inner>
    </Container>
  );
};
