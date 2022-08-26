import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PopoverItem } from './index';
import { StoryContainer } from 'components/StoryContainer';

const meta: ComponentMeta<typeof PopoverItem> = {
  title: 'Control/PopoverItem',
  component: PopoverItem,
};

export const Variants: ComponentStory<typeof PopoverItem> = () => (
  <StoryContainer direction="row">
    <PopoverItem onClick={() => alert('Pop!')}>쿠폰 등록</PopoverItem>
    <PopoverItem warning onClick={() => alert('Pop!')}>
      쿠폰 등록
    </PopoverItem>
    <PopoverItem bold onClick={() => alert('Pop!')}>
      쿠폰 등록
    </PopoverItem>
  </StoryContainer>
);

export default meta;
