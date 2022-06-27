import React from 'react';
import type { MouseEvent } from 'react';

import {
  checkboxChecked,
  checkboxOutline,
  checkboxDisabled,
  checkboxHovered,
  checkboxRoundOn,
  checkboxRoundOff,
} from '../../../assets';
import useHover from '../../../hooks/useHover';
import { Container, Icon } from './Checkbox.styles';

interface Props {
  state?: 'on' | 'off';
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
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
}: Props) => {
  const { ref: hoverRef, value: isHovered } = useHover<HTMLDivElement>();

  const getIconImg = () => {
    if (round) {
      return state === 'on' ? checkboxRoundOn : checkboxRoundOff;
    }
    if (disabled) return checkboxDisabled;
    if (state === 'on') return checkboxChecked;
    if (isHovered) return checkboxHovered;
    return checkboxOutline;
  };

  return (
    <Container
      ref={hoverRef}
      className={className}
      disabled={disabled}
      onClick={(e) => !disabled && onClick(e)}
      isRound={round}
    >
      <Icon src={getIconImg()} alt={`checkbox-${state}`} isRound={round} />
    </Container>
  );
};
