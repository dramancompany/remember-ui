import React from 'react';

import {
  radioChecked,
  radioUnchecked,
  radioHovered,
  radioBlackChecked,
  radioBlackUnchecked,
} from '../../../assets';
import useHover from '../../../hooks/useHover';
import { RadioButton } from './Radio.styles';

export interface Props {
  isChecked: boolean;
  onClick?: () => void;
  className?: string;
  theme: 'yellow' | 'black';
}

export const Radio = ({
  isChecked,
  onClick,
  className,
  theme = 'yellow',
}: Props) => {
  const [hoverRef, isHovered] = useHover<HTMLImageElement>();

  const getIconImg = () => {
    if (theme === 'yellow') {
      if (isChecked) return radioChecked;
      if (isHovered) return radioHovered;
      return radioUnchecked;
    }

    if (theme === 'black') {
      if (isChecked) return radioBlackChecked;
      return radioBlackUnchecked;
    }
  };

  return (
    <RadioButton
      ref={hoverRef}
      className={className}
      src={getIconImg()}
      alt="checked"
      onClick={onClick}
      theme={theme}
    />
  );
};
