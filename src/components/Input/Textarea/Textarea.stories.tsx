import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textarea } from './index';

const meta: ComponentMeta<typeof Textarea> = {
  title: 'Input/Textarea',
  component: Textarea,
  args: {
    label: '문의내용',
    type: 'text',
    name: 'message',
    maxLength: 1500,
    placeholder: '1500자 내로 문의 내용을 적어 주세요.',
    required: true,
  },
};

const Template: ComponentStory<typeof Textarea> = (args) => {
  const [content, setContent] = React.useState('');

  return <Textarea {...args} onChange={setContent} value={content} />;
};

export const Basic = Template.bind({});

export default meta;
