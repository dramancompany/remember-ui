import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MaskingInput } from './index';

const meta: ComponentMeta<typeof MaskingInput> = {
  title: 'Input/MaskingInput',
  component: MaskingInput,
  args: {
    mask: [
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      '-',
      /[0-9]/,
      /[0-9]/,
      '-',
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
    ],
    type: 'text',
    name: 'registraionNumber',
    onChange: () => {},
    label: '사업자등록번호',
    placeholder: '10자리 숫자 입력(000-00-00000)',
  },
};

const Template: ComponentStory<typeof MaskingInput> = (args) => (
  <MaskingInput {...args} />
);

export const Basic = Template.bind({});

export default meta;
