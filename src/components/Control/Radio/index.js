import React from 'react';

import { radioChecked, radioUnchecked } from '../../../assets';

import { RadioButton } from './Radio.styles';

export const Radio = ({ isChecked, onClick, className }) => {
  return (
    <RadioButton
      className={className}
      src={isChecked ? radioChecked : radioUnchecked}
      alt="checked"
      onClick={onClick}
    />
  );
};
