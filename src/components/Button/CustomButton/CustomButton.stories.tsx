import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CustomButton } from './index';
import { DoczContainer } from 'components/DoczContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

const meta: ComponentMeta<typeof CustomButton> = {
  title: 'Buttons/CustomButton',
  component: CustomButton,
};

const Template: ComponentStory<typeof CustomButton> = (args) => (
  <CustomButton {...args} />
);

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Variants: ComponentStory<typeof CustomButton> = () => (
  <DoczContainer direction="column">
    <h4>Basic Usage (with RealWorld)</h4>
    <DoczContainer direction="row">
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
    </DoczContainer>
  </DoczContainer>
);

export const Primary = Template.bind({});

Primary.args = {
  children: 'CustomButton',
};

export default meta;
