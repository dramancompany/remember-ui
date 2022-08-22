import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PopoverItem } from './index';
import { DoczContainer } from 'components/DoczContainer';

const meta: ComponentMeta<typeof PopoverItem> = {
  title: 'Control/PopoverItem',
  component: PopoverItem,
};

export const Variants: ComponentStory<typeof PopoverItem> = () => (
  <DoczContainer direction="row">
    <PopoverItem onClick={() => alert('Pop!')}>쿠폰 등록</PopoverItem>
    <PopoverItem warning onClick={() => alert('Pop!')}>
      쿠폰 등록
    </PopoverItem>
    <PopoverItem bold onClick={() => alert('Pop!')}>
      쿠폰 등록
    </PopoverItem>
  </DoczContainer>
);

export default meta;
