import React, { InputHTMLAttributes } from 'react';

import { COLOR_MAP, RadioInput, SIZE_MAP } from './Radio.styles';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * @deprecated
   * `isChecked`대신 `checked`를 사용해 주세요
   */
  isChecked?: boolean;
  theme?: keyof typeof COLOR_MAP;
  $size?: keyof typeof SIZE_MAP;
}

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const Radio = ({
  isChecked = false,
  theme = 'yellow',
  $size = 'medium',
  ...props
}: RadioProps) => (
  <RadioInput checked={isChecked} theme={theme} $size={$size} {...props} />
);
