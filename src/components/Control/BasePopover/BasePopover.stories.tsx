import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BasePopover } from './index';
import { PopoverItem } from '../PopoverItem';
import { NewBaseButton } from 'components/Buttons';

const meta: ComponentMeta<typeof BasePopover> = {
  title: 'Control/BasePopover',
  component: BasePopover,
  args: {
    children: (
      <NewBaseButton theme="blue" size="large">
        Open Popover
      </NewBaseButton>
    ),
    content: (
      <div>
        <PopoverItem onClick={() => alert('Pop!')}>쿠폰 등록1</PopoverItem>
        <PopoverItem onClick={() => alert('Pop!')}>쿠폰 등록2</PopoverItem>
        <PopoverItem onClick={() => alert('Pop!')}>쿠폰 등록3</PopoverItem>
      </div>
    ),
  },
};

export const Variants: ComponentStory<typeof BasePopover> = (args) => (
  <>
    <div style={{ width: '150px' }}>
      <BasePopover {...args}>{args.children}</BasePopover>
    </div>
  </>
);

export default meta;
