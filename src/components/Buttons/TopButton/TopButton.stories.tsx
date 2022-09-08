import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TopButton } from './index';

const meta: ComponentMeta<typeof TopButton> = {
  title: 'Buttons/TopButton',
  component: TopButton,
};

export const Variants: ComponentStory<typeof TopButton> = () => (
  <div
    style={{
      width: '100%',
      height: '90vh',
      backgroundColor: '#E8E6DF',
      position: 'relative',
      textAlign: 'center',
      padding: '20px',
    }}
  >
    <h1>Scroll Down</h1>
    <TopButton marginLeft={0} />
  </div>
);

export default meta;
