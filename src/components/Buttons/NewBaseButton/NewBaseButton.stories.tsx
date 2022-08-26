import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NewBaseButton } from './index';
import { StoryContainer } from 'components/StoryContainer';

const meta: ComponentMeta<typeof NewBaseButton> = {
  title: 'Buttons/NewBaseButton',
  component: NewBaseButton,
  args: { children: 'NewBaseButton' },
};

export const Variants: ComponentStory<typeof NewBaseButton> = () => (
  <>
    <StoryContainer direction="column">
      <div>Button Themes</div>
      <StoryContainer direction="row">
        <NewBaseButton theme="yellow">YELLOW</NewBaseButton>
        <NewBaseButton theme="red">RED</NewBaseButton>
        <NewBaseButton theme="blue">BLUE</NewBaseButton>
        <NewBaseButton theme="gray">GRAY</NewBaseButton>
        <NewBaseButton theme="light">LIGHT</NewBaseButton>
        <NewBaseButton theme="primary">PRIMARY</NewBaseButton>
        <NewBaseButton disabled>DISABLE</NewBaseButton>
      </StoryContainer>
    </StoryContainer>
    <StoryContainer direction="column">
      <div>Outline Styled Buttons</div>
      <StoryContainer direction="row">
        <NewBaseButton outline theme="yellow">
          YELLOW
        </NewBaseButton>
        <NewBaseButton outline theme="red">
          RED
        </NewBaseButton>
        <NewBaseButton outline theme="blue">
          BLUE
        </NewBaseButton>
        <NewBaseButton outline theme="gray">
          GRAY
        </NewBaseButton>
        <NewBaseButton outline theme="light">
          LIGHT
        </NewBaseButton>
        <NewBaseButton outline theme="primary">
          PRIMARY
        </NewBaseButton>
        <NewBaseButton outline disabled>
          DISABLE
        </NewBaseButton>
      </StoryContainer>
    </StoryContainer>
    <StoryContainer direction="column">
      <div>Buttons Sizes</div>
      <StoryContainer direction="row">
        <NewBaseButton size="xlarge" theme="primary">
          xlarge
        </NewBaseButton>
        <NewBaseButton size="large" theme="primary">
          Large
        </NewBaseButton>
        <NewBaseButton size="medium" theme="primary">
          Medium
        </NewBaseButton>
        <NewBaseButton size="small" theme="primary">
          Small
        </NewBaseButton>
      </StoryContainer>
    </StoryContainer>
    <StoryContainer direction="column">
      <div>Block Level Buttons (width: 100%)</div>
      <StoryContainer direction="row">
        <div style={{ width: '300px' }}>
          <NewBaseButton size="large" theme="primary" block>
            Primary
          </NewBaseButton>
        </div>
        <div style={{ width: '300px' }}>
          <NewBaseButton size="large" block theme="light" outline>
            Light
          </NewBaseButton>
        </div>
      </StoryContainer>
    </StoryContainer>
    <StoryContainer direction="column">
      <div>Disabled State</div>
      <StoryContainer direction="row">
        <NewBaseButton size="medium" disabled>
          Fill Style Disabled
        </NewBaseButton>
        <NewBaseButton size="medium" outline disabled>
          Outline Style Disabled
        </NewBaseButton>
      </StoryContainer>
    </StoryContainer>
    <StoryContainer direction="column">
      <div>isLoading State</div>
      <StoryContainer direction="row">
        <NewBaseButton size="medium" theme="primary" isLoading>
          저장하기
        </NewBaseButton>
        <NewBaseButton size="medium" theme="blue" isLoading>
          저장하기
        </NewBaseButton>
        <NewBaseButton size="medium" outline isLoading>
          저장하기
        </NewBaseButton>
        <NewBaseButton size="medium" outline theme="light" isLoading>
          저장하기
        </NewBaseButton>
        <NewBaseButton size="medium" theme="red" isLoading>
          저장하기
        </NewBaseButton>
        <NewBaseButton size="medium" isLoading disabled>
          저장하기
        </NewBaseButton>
      </StoryContainer>
    </StoryContainer>
    <StoryContainer direction="column">
      <div>Real World Usage</div>
      <StoryContainer direction="row">
        <NewBaseButton size="xlarge" theme="primary">
          불러오기
        </NewBaseButton>
        <NewBaseButton size="small" outline theme="light">
          직무 선택
        </NewBaseButton>
      </StoryContainer>
    </StoryContainer>
  </>
);

const Template: ComponentStory<typeof NewBaseButton> = (args) => (
  <NewBaseButton {...args} />
);

export const Basic = Template.bind({});

export default meta;
