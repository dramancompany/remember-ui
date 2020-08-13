import React from 'react';

import { radioChecked, radioUnchecked, radioHovered } from '../../../assets';
import useHover from '../../../hooks/useHover';
import { RadioButton } from './Radio.styles';

export const Radio = ({ isChecked, onClick, className }) => {
  const [hoverRef, isHovered] = useHover();

  const getIconImg = () => {
    if (isChecked) return radioChecked;
    if (isHovered) return radioHovered;
    return radioUnchecked;
  };

  return (
    <RadioButton
      ref={hoverRef}
      className={className}
      src={getIconImg()}
      alt="checked"
      onClick={onClick}
    />
  );
};
