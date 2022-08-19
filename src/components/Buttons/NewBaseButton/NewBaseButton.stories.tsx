import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NewBaseButton } from './index';
import { DoczContainer } from 'components/DoczContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

const meta: ComponentMeta<typeof NewBaseButton> = {
  title: 'Buttons/NewBaseButton',
  component: NewBaseButton,
};

const Template: ComponentStory<typeof NewBaseButton> = (args) => (
  <NewBaseButton {...args} />
);

export const Variants: ComponentStory<typeof NewBaseButton> = () => (
  <>
    <DoczContainer direction="column">
      <div>Button Themes</div>
      <DoczContainer direction="row">
        <NewBaseButton theme="yellow">YELLOW</NewBaseButton>
        <NewBaseButton theme="red">RED</NewBaseButton>
        <NewBaseButton theme="blue">BLUE</NewBaseButton>
        <NewBaseButton theme="gray">GRAY</NewBaseButton>
        <NewBaseButton theme="light">LIGHT</NewBaseButton>
        <NewBaseButton theme="primary">PRIMARY</NewBaseButton>
        <NewBaseButton disabled>DISABLE</NewBaseButton>
      </DoczContainer>
    </DoczContainer>
    <DoczContainer direction="column">
      <div>Outline Styled Buttons</div>
      <DoczContainer direction="row">
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
      </DoczContainer>
    </DoczContainer>
    <DoczContainer direction="column">
      <div>Buttons Sizes</div>
      <DoczContainer direction="row">
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
      </DoczContainer>
    </DoczContainer>
    <DoczContainer direction="column">
      <div>Block Level Buttons (width: 100%)</div>
      <DoczContainer direction="row">
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
      </DoczContainer>
    </DoczContainer>
    <DoczContainer direction="column">
      <div>Disabled State</div>
      <DoczContainer direction="row">
        <NewBaseButton size="medium" disabled>
          Fill Style Disabled
        </NewBaseButton>
        <NewBaseButton size="medium" outline disabled>
          Outline Style Disabled
        </NewBaseButton>
      </DoczContainer>
    </DoczContainer>
    <DoczContainer direction="column">
      <div>isLoading State</div>
      <DoczContainer direction="row">
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
      </DoczContainer>
    </DoczContainer>
    <DoczContainer direction="column">
      <div>Real World Usage</div>
      <DoczContainer direction="row">
        <NewBaseButton size="xlarge" theme="primary">
          불러오기
        </NewBaseButton>
        <NewBaseButton size="small" outline theme="light">
          직무 선택
        </NewBaseButton>
      </DoczContainer>
    </DoczContainer>
  </>
);

export const Primary = Template.bind({});

Primary.args = {
  children: 'NewBaseButton',
};

export default meta;
