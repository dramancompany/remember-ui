import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Chip } from './index';

const meta: ComponentMeta<typeof Chip> = {
  title: 'Common/Chip',
  component: Chip,
  args: {
    children: 'Base Chip',
  },
};

export const Basic: ComponentStory<typeof Chip> = (args) => (
  <Chip {...args}>{args.children}</Chip>
);

export default meta;
