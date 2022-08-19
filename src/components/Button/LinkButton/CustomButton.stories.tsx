import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LinkButton } from './index';
import { DoczContainer } from 'components/DoczContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

const meta: ComponentMeta<typeof LinkButton> = {
  title: 'Buttons/LinkButton',
  component: LinkButton,
};

const Template: ComponentStory<typeof LinkButton> = (args) => (
  <LinkButton {...args} />
);

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Variants: ComponentStory<typeof LinkButton> = () => (
  <DoczContainer direction="row">
    <LinkButton>Default</LinkButton>
    <LinkButton showAddress={false}>Default</LinkButton>
    <LinkButton showAddress={false} address="https://career.rememberapp.co.kr">
      Career Link
    </LinkButton>
    <LinkButton address="https://dramancompany.github.io/remember-ui/">
      Remember UI
    </LinkButton>
  </DoczContainer>
);

export const Primary = Template.bind({});

Primary.args = {
  address: 'https://dramancompany.github.io/remember-ui/',
  children: 'LinkButton',
};

export default meta;
