import React from 'react';

import { Spinner } from '../../Spinner';

import {
  Inner,
  Container,
  BlackButton,
  YellowButton,
  LightYellowButton,
  GrayButton,
  BlueButton,
  RedButton,
  LiteButton,
  PlusButton,
} from './Button.styles';

export const BaseButton = ({
  className = '',
  disabled = false,
  onClick = () => {},
  rounded = true,
  color = 'yellow',
  fill = false,
  borderless = false,
  size = 'small',
  width,
  isLoading,
  children,
  testId,
}) => {
  const _onClick = (e) => {
    if (disabled) return;
    if (isLoading) return;
    onClick(e);
  };

  const getButton = (color) => {
    switch (color) {
      case 'black':
        return BlackButton;
      case 'yellow':
        return YellowButton;
      case 'light-yellow':
        return LightYellowButton;
      case 'gray':
        return GrayButton;
      case 'blue':
        return BlueButton;
      case 'red':
        return RedButton;
      case 'lite':
        return LiteButton;
      case 'plus':
        return PlusButton;
      default:
        return Container;
    }
  };

  const ColorButton = getButton(color);

  return (
    <ColorButton
      className={className}
      size={size}
      width={width}
      rounded={rounded}
      fillColor={fill}
      borderless={borderless}
      disabled={disabled}
      onClick={_onClick}
      data-testid={testId}
    >
      <Inner>
        {!isLoading && children}
        {isLoading && <Spinner width={18} height={18} borderWeight={3} />}
      </Inner>
    </ColorButton>
  );
};
