import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from './index';
import { StoryContainer } from 'components/StoryContainer';

const meta: ComponentMeta<typeof Checkbox> = {
  title: 'Control/Checkbox',
  component: Checkbox,
};

export const Variants: ComponentStory<typeof Checkbox> = () => (
  <>
    <StoryContainer direction="column">
      <h3>체크박스 on/off/disabled</h3>
      <StoryContainer direction="row">
        <Checkbox state="on" />
        <Checkbox state="off" />
        <Checkbox state="on" disabled />
      </StoryContainer>
    </StoryContainer>
    <StoryContainer direction="column">
      <h3>Round 체크박스 on/off</h3>
      <StoryContainer direction="row">
        <Checkbox round state="on" />
        <Checkbox round state="off" />
      </StoryContainer>
    </StoryContainer>
  </>
);

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Basic = Template.bind({});

export default meta;
