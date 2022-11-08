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
          <Checkbox checked />
          <Checkbox />
          <Checkbox checked disabled />
          <Checkbox disabled />
        </StoryContainer>
      </StoryContainer>
      <StoryContainer direction="column">
        <h3>체크박스 (small) on/off/disabled</h3>
        <StoryContainer direction="row">
          <Checkbox checked $size="small" />
          <Checkbox $size="small" />
          <Checkbox checked $size="small" disabled />
          <Checkbox $size="small" disabled />
        </StoryContainer>
      </StoryContainer>
      <StoryContainer direction="column">
        <h3>Round 체크박스 (small) on/off/disabled</h3>
        <StoryContainer direction="row">
          <Checkbox round checked $size="small" />
          <Checkbox round $size="small" />
          <Checkbox round checked $size="small" disabled />
          <Checkbox round $size="small" disabled />
        </StoryContainer>
      </StoryContainer>
      <StoryContainer direction="column">
        <h3>Round 체크박스 (medium) on/off/disabled</h3>
        <StoryContainer direction="row">
          <Checkbox round checked />
          <Checkbox round />
          <Checkbox round checked disabled />
          <Checkbox round disabled />
        </StoryContainer>
      </StoryContainer>
      <StoryContainer direction="column">
        <h3>체크박스 toggle</h3>
        <StoryContainer direction="row">
          <Checkbox
            round
            checked={checked}
            onClick={() => setChecked(!checked)}
          />
          <Checkbox
            $size="small"
            round
            checked={checked}
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
