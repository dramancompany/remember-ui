import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BaseButton } from './index';
import { StoryContainer } from 'components/StoryContainer';

const meta: ComponentMeta<typeof BaseButton> = {
  title: 'Buttons/BaseButton',
  component: BaseButton,
  args: { children: 'BaseButton' },
};

export const Variants: ComponentStory<typeof BaseButton> = () => (
  <StoryContainer direction="column">
    <h1 style={{ fontSize: '30px', borderBottom: '1px solid black' }}>
      Deprecated
    </h1>
    <StoryContainer direction="row">
      <BaseButton width={100}>Default</BaseButton>
      <BaseButton fill width={100}>
        Fill
      </BaseButton>
      <BaseButton rounded={false} disabled width={100}>
        No Rounded
      </BaseButton>
    </StoryContainer>
    <StoryContainer direction="row">
      <BaseButton isLoading width={100}>
        isLoading
      </BaseButton>
      <BaseButton isLoading color="black" size="large" width={100}>
        isLoading
      </BaseButton>
      <BaseButton color="blue" size="large" width={100}>
        Large blue
      </BaseButton>
      <BaseButton fill color="plus" size="xlarge" width={100}>
        plus
      </BaseButton>
    </StoryContainer>
  </StoryContainer>
);

const Template: ComponentStory<typeof BaseButton> = (args) => (
  <BaseButton {...args} />
);

export const Basic = Template.bind({});

export default meta;
