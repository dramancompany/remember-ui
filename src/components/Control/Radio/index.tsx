import React from 'react';

import { COLOR_MAP, RadioInput, SIZE_MAP } from './Radio.styles';

export interface RadioProps {
  isChecked?: boolean;
  onClick?: () => void;
  className?: string;
  theme?: keyof typeof COLOR_MAP;
  size?: keyof typeof SIZE_MAP;
}

export const Radio = ({
  isChecked = false,
  onClick,
  className,
  theme = 'yellow',
  size = 'medium',
}: RadioProps) => (
  <RadioInput
    className={className}
    theme={theme}
    $size={size}
    checked={isChecked}
    onChange={onClick}
  />
);
