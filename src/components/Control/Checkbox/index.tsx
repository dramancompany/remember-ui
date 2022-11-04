import type { MouseEvent } from 'react';

import { CheckboxInput } from './Checkbox.styles';

export interface CheckboxProps {
  state?: 'on' | 'off';
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  round?: boolean;
}

export const Checkbox = ({
  state = 'off',
  onClick = () => {},
  disabled = false,
  className,
  round = false,
}: CheckboxProps) => (
  <CheckboxInput
    className={className}
    checked={state === 'on'}
    onClick={onClick}
    disabled={disabled}
    isRound={round}
  />
);
