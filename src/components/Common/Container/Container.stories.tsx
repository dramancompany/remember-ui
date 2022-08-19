import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Container } from './index';

const meta: ComponentMeta<typeof Container> = {
  title: 'Common/Container',
  component: Container,
  args: {
    children: 'React.ReactNode',
    direction: 'column',
  },
};

export const Basic: ComponentStory<typeof Container> = (args) => (
  <div>
    <h1
      style={{
        fontSize: '30px',
        borderBottom: '1px solid black',
        display: 'inline-block',
      }}
    >
      Deprecated
    </h1>
    <Container {...args}>
      <div
        style={{
          width: '120px',
          height: '50px',
          background: '#ea5128',
          textAlign: 'center',
        }}
      >
        A
      </div>
      <div
        style={{
          width: '120px',
          height: '50px',
          background: '#2864f0',
          textAlign: 'center',
        }}
      >
        B
      </div>
      <div
        style={{
          width: '120px',
          height: '50px',
          background: '#646464',
          textAlign: 'center',
        }}
      >
        C
      </div>
    </Container>
  </div>
);

export default meta;
