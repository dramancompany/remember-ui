import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TopButton } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

const meta: ComponentMeta<typeof TopButton> = {
  title: 'Buttons/TopButton',
  component: TopButton,
};

export const Variants: ComponentStory<typeof TopButton> = () => {
  return (
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
};

export default meta;
