import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DoubleInput } from './index';

const meta: ComponentMeta<typeof DoubleInput> = {
  title: 'Input/DoubleInput',
  component: DoubleInput,
};

export const Variants: ComponentStory<typeof DoubleInput> = () => {
  const [month, setMonth] = React.useState('');
  const [year, setYear] = React.useState('');

  return (
    <>
      <DoubleInput
        label1="유효 기간"
        value1={month}
        value2={year}
        name1="expiryDateMonth"
        name2="expiryDateYear"
        placeholder1="MM"
        placeholder2="YY"
        onChange1={(e) => {
          setMonth(e.target.value);
        }}
        onChange2={(e) => {
          setYear(e.target.value);
        }}
        validate={(_expiryDateMonth, _expiryDateYear) => {
          if (!_expiryDateMonth || !_expiryDateYear) {
            return '';
          }
          if (
            _expiryDateMonth.toString().length === 2 &&
            _expiryDateYear.toString().length === 2
          ) {
            return '';
          }
          return '유효 기간은 2자리 숫자로 입력하세요';
        }}
        maxLength={3}
        onlyNumber
      />
    </>
  );
};

export default meta;
