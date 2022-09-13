import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RememberLogo } from './index';

const meta: ComponentMeta<typeof RememberLogo> = {
  title: 'Logo/RememberLogo',
  component: RememberLogo,
  args: {
    width: 50,
  },
};

const Template: ComponentStory<typeof RememberLogo> = (args) => (
  <RememberLogo {...args} />
);

export const Basic = Template.bind({});

export default meta;
