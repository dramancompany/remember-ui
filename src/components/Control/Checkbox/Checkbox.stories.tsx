import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from './index';
import { DoczContainer } from 'components/DoczContainer';

const meta: ComponentMeta<typeof Checkbox> = {
  title: 'Control/Checkbox',
  component: Checkbox,
};

export const Variants: ComponentStory<typeof Checkbox> = () => (
  <>
    <DoczContainer direction="column">
      <h3>체크박스 on/off/disabled</h3>
      <DoczContainer direction="row">
        <Checkbox state="on" />
        <Checkbox state="off" />
        <Checkbox state="on" disabled />
      </DoczContainer>
    </DoczContainer>
    <DoczContainer direction="column">
      <h3>Round 체크박스 on/off</h3>
      <DoczContainer direction="row">
        <Checkbox round state="on" />
        <Checkbox round state="off" />
      </DoczContainer>
    </DoczContainer>
  </>
);

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Basic = Template.bind({});

export default meta;
