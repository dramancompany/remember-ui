import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoryContainer } from 'components/StoryContainer';

import { CustomButton } from './index';

const meta: ComponentMeta<typeof CustomButton> = {
  title: 'Buttons/CustomButton',
  component: CustomButton,
  args: { children: 'CustomButton' },
};

export const Variants: ComponentStory<typeof CustomButton> = () => (
  <StoryContainer direction="column">
    <h4>Basic Usage (with RealWorld)</h4>
    <StoryContainer direction="row">
      <CustomButton
        size="large"
        customStyle={{
          borderColor: '#fff5e2',
          backgroundColor: '#fff5e2',
          fontColor: '#e19a11',
          fontWeight: 'bold',
        }}
      >
        이용권 구매하기
      </CustomButton>
      <CustomButton
        size="xlarge"
        customStyle={{
          borderColor: 'white',
          backgroundColor: 'white',
          fontColor: '#333',
          fontWeight: 'bold',
        }}
      >
        서비스 소개서 다운로드
      </CustomButton>
    </StoryContainer>
  </StoryContainer>
);

const Template: ComponentStory<typeof CustomButton> = (args) => (
  <CustomButton {...args} />
);

export const Basic = Template.bind({});

export default meta;
