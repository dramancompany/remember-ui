import React from 'react';

import { Spinner } from '../../Spinner';

import { Container, Inner } from './NewBaseButton.styles';

export const NewBaseButton = ({
  className = '',
  disabled = false,
  onClick = () => {},
  theme = 'yellow',
  outline = false,
  size = 'small',
  isLoading = false,
  block = false,
  children,
  testId,
}) => {
  const _onClick = (e) => {
    if (disabled) return;
    if (isLoading) return;
    onClick(e);
  };

  const spinnerTheme = () => {
    console.log(theme, outline);
    if (theme === 'primary' && outline) return 'gray';
    if (theme === 'primary') return 'white';

    return 'gray';
  };

  return (
    <Container
      className={className}
      size={size}
      theme={theme}
      outline={outline}
      disabled={disabled}
      block={block}
      onClick={_onClick}
      isLoading={isLoading}
      data-testid={testId}
    >
      <Inner size={size}>
        {!isLoading && children}
        {isLoading && (
          <Spinner
            width={18}
            height={18}
            borderWeight={3}
            theme={spinnerTheme()}
          />
        )}
      </Inner>
    </Container>
  );
};
