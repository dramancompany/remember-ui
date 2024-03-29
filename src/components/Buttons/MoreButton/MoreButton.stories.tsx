import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoryContainer } from 'components/StoryContainer';
import { NewBaseButton } from '../NewBaseButton';

import { MoreButton } from './index';

const meta: ComponentMeta<typeof MoreButton> = {
  title: 'Buttons/MoreButton',
  component: MoreButton,
};

export const Variants: ComponentStory<typeof MoreButton> = () => {
  const [isShow, setIsShow] = React.useState(false);
  const toggle = () => setIsShow(!isShow);

  return (
    <>
      <StoryContainer direction="column">
        <div>MoreButton Show/Hide( Static )</div>
        <StoryContainer direction="row">
          <NewBaseButton theme="light" outline>
            Show
            <MoreButton size="small" />
          </NewBaseButton>
          <NewBaseButton theme="light" outline>
            Hide
            <MoreButton value size="small" />
          </NewBaseButton>
          <NewBaseButton theme="blue">
            Show
            <MoreButton size="large" />
          </NewBaseButton>
          <NewBaseButton theme="blue">
            Hide
            <MoreButton value size="large" />
          </NewBaseButton>
        </StoryContainer>
      </StoryContainer>

      <StoryContainer direction="column">
        <div>MoreButton onClick Event Bind( Dynamic )</div>
        <StoryContainer direction="row">
          <NewBaseButton onClick={toggle}>
            {isShow ? 'Hide' : 'Show'}
            <MoreButton size="large" value={isShow} />
          </NewBaseButton>
        </StoryContainer>
      </StoryContainer>
    </>
  );
};

const Template: ComponentStory<typeof MoreButton> = (args) => (
  <MoreButton {...args} />
);

export const Basic = Template.bind({});

export default meta;
