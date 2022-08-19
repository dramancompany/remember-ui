import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TopButton } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

const meta: ComponentMeta<typeof TopButton> = {
  title: 'Buttons/TopButton',
  component: TopButton,
};

const Template: ComponentStory<typeof TopButton> = (args) => (
  <TopButton {...args} />
);

export const Variants: ComponentStory<typeof TopButton> = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '90vh',
        backgroundColor: 'lightgray',
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
