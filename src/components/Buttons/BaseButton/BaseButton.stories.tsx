import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BaseButton } from './index';
import { DoczContainer } from 'components/DoczContainer';

const meta: ComponentMeta<typeof BaseButton> = {
  title: 'Buttons/BaseButton',
  component: BaseButton,
};

const Template: ComponentStory<typeof BaseButton> = (args) => (
  <BaseButton {...args} />
);

export const Variants: ComponentStory<typeof BaseButton> = () => (
  <DoczContainer direction="column">
    <h1 style={{ fontSize: '30px', borderBottom: '1px solid black' }}>
      Deprecated
    </h1>
    <DoczContainer direction="row">
      <BaseButton width={100}>Default</BaseButton>
      <BaseButton fill width={100}>
        Fill
      </BaseButton>
      <BaseButton rounded={false} disabled width={100}>
        No Rounded
      </BaseButton>
    </DoczContainer>
    <DoczContainer direction="row">
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
    </DoczContainer>
  </DoczContainer>
);

export const Primary = Template.bind({});

Primary.args = {
  children: 'BaseButton',
};

export default meta;
