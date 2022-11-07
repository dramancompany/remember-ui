import React, { type MouseEvent } from 'react';

import { CheckboxInput, SIZE_MAP } from './Checkbox.styles';

export interface CheckboxProps {
  state?: 'on' | 'off';
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  round?: boolean;
  size?: keyof typeof SIZE_MAP;
}

export const Checkbox = ({
  state = 'off',
  onClick = () => {},
  disabled = false,
  className,
  round = false,
  size = 'medium',
}: CheckboxProps) => (
  <CheckboxInput
    className={className}
    checked={state === 'on'}
    onClick={onClick}
    onChange={() => {}}
    disabled={disabled}
    isRound={round}
    $size={size}
  />
);
