import React from 'react';

import { Spinner } from '../../Common/Spinner';
import type { BaseButtonProps } from './BaseButton.types';

import {
  BlackButton,
  BlueButton,
  Container,
  GrayButton,
  Inner,
  LightYellowButton,
  LiteButton,
  PlusButton,
  RedButton,
  YellowButton,
} from './BaseButton.styles';

export const BUTTONS = {
  black: BlackButton,
  yellow: YellowButton,
  'light-yellow': LightYellowButton,
  gray: GrayButton,
  blue: BlueButton,
  red: RedButton,
  lite: LiteButton,
  plus: PlusButton,
} as const;

/**
 * @deprecated NewBaseButton으로 대체되었습니다.
 */
export const BaseButton = ({
  className,
  disabled = false,
  onClick,
  rounded = true,
  color = 'yellow',
  fill = false,
  borderless = false,
  size = 'small',
  width,
  isLoading,
  children,
  testId,
}: BaseButtonProps) => {
  const preventOnClick = disabled || isLoading;
  const ColorButton = BUTTONS[color] ?? Container;

  return (
    <ColorButton
      className={className}
      size={size}
      width={width}
      rounded={rounded}
      fillColor={fill}
      borderless={borderless}
      disabled={disabled}
      onClick={preventOnClick ? undefined : onClick}
      data-testid={testId}
    >
      <Inner>
        {isLoading ? (
          <Spinner width={18} height={18} borderWeight={3} />
        ) : (
          children
        )}
      </Inner>
    </ColorButton>
  );
};
