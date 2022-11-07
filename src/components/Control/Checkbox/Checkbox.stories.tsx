import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoryContainer } from 'components/StoryContainer';

import { Checkbox } from './index';

const meta: ComponentMeta<typeof Checkbox> = {
  title: 'Control/Checkbox',
  component: Checkbox,
};

export const Variants: ComponentStory<typeof Checkbox> = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <StoryContainer direction="column">
        <h3>체크박스 (medium) on/off/disabled</h3>
        <StoryContainer direction="row">
          <Checkbox state="on" />
          <Checkbox state="off" />
          <Checkbox state="on" disabled />
          <Checkbox state="off" disabled />
        </StoryContainer>
      </StoryContainer>
      <StoryContainer direction="column">
        <h3>체크박스 (small) on/off/disabled</h3>
        <StoryContainer direction="row">
          <Checkbox state="on" size="small" />
          <Checkbox state="off" size="small" />
          <Checkbox state="on" size="small" disabled />
          <Checkbox state="off" size="small" disabled />
        </StoryContainer>
      </StoryContainer>
      <StoryContainer direction="column">
        <h3>Round 체크박스 (small) on/off/disabled</h3>
        <StoryContainer direction="row">
          <Checkbox round state="on" size="small" />
          <Checkbox round state="off" size="small" />
          <Checkbox round state="on" size="small" disabled />
          <Checkbox round state="off" size="small" disabled />
        </StoryContainer>
      </StoryContainer>
      <StoryContainer direction="column">
        <h3>Round 체크박스 (medium) on/off/disabled</h3>
        <StoryContainer direction="row">
          <Checkbox round state="on" />
          <Checkbox round state="off" />
          <Checkbox round state="on" disabled />
          <Checkbox round state="off" disabled />
        </StoryContainer>
      </StoryContainer>
      <StoryContainer direction="column">
        <h3>체크박스 toggle</h3>
        <StoryContainer direction="row">
          <Checkbox
            round
            state={checked ? 'on' : 'off'}
            onClick={() => setChecked(!checked)}
          />
          <Checkbox
            size="small"
            round
            state={checked ? 'on' : 'off'}
            onClick={() => setChecked(!checked)}
          />
        </StoryContainer>
      </StoryContainer>
    </>
  );
};

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Basic = Template.bind({});

export default meta;
