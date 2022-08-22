import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfileAvatar } from '../index';

const meta: ComponentMeta<typeof ProfileAvatar> = {
  title: 'Icon/ProfileAvatar',
  component: ProfileAvatar,
  args: {
    width: 50,
  },
};

const Template: ComponentStory<typeof ProfileAvatar> = (args) => (
  <ProfileAvatar {...args} />
);

export const Primary = Template.bind({});

export default meta;
