import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner } from './index';

const meta: ComponentMeta<typeof Spinner> = {
  title: 'Common/Spinner',
  component: Spinner,
};

export const Basic: ComponentStory<typeof Spinner> = (args) => (
  <div
    style={{
      background: 'lightgray',
      height: '200px',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Spinner {...args} />
  </div>
);

export default meta;
