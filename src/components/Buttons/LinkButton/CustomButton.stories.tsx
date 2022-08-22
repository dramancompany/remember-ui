import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LinkButton } from './index';
import { DoczContainer } from 'components/DoczContainer';

const meta: ComponentMeta<typeof LinkButton> = {
  title: 'Buttons/LinkButton',
  component: LinkButton,
  args: {
    address: 'https://dramancompany.github.io/remember-ui/',
    children: 'LinkButton',
  },
};

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

const Template: ComponentStory<typeof LinkButton> = (args) => (
  <LinkButton {...args} />
);

export const Basic = Template.bind({});

export default meta;
