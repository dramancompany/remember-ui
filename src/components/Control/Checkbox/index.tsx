import React, { InputHTMLAttributes } from 'react';

import { CheckboxInput, SIZE_MAP } from './Checkbox.styles';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * @deprecated
   * `state`대신 `checked`를 사용해 주세요
   */
  state?: 'on' | 'off';
  round?: boolean;
  $size?: keyof typeof SIZE_MAP;
}

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const Checkbox = ({
  state = 'off',
  round = false,
  $size = 'medium',
  ...props
}: CheckboxProps) => (
  <CheckboxInput
    checked={state === 'on'}
    isRound={round}
    $size={$size}
    {...props}
  />
);
