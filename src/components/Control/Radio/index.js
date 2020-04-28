import React from 'react';

import { RadioChecked, RadioUnChecked } from '../../../assets';

import { RadioButton } from './Radio.styles';

export const Radio = ({ isChecked, onClick }) => {
  return (
    <RadioButton
      src={isChecked ? RadioChecked : RadioUnChecked}
      alt="checked"
      onClick={onClick}
    />
  );
};
