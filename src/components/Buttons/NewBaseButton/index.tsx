import React from 'react';

import { Spinner } from '../../Common/Spinner';

import { Container, Inner } from './NewBaseButton.styles';
import type { NewBaseButtonProps } from './NewBaseButton.types';

export * from './NewBaseButton.types';

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
