import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoryContainer } from 'components/StoryContainer';

import { BaseTooltip } from './index';

const meta: ComponentMeta<typeof BaseTooltip> = {
  title: 'Control/BaseTooltip',
  component: BaseTooltip,
  args: {
    content: 'BaseTooltip',
  },
};

export const Variants: ComponentStory<typeof BaseTooltip> = () => (
  <StoryContainer direction="row">
    <BaseTooltip
      content={
        <span>
          제안을 보낸 후보자는 포지션에서
          <br /> 삭제할 수 없습니다
        </span>
      }
    />
    <BaseTooltip content="더보기" type="more" />
    <BaseTooltip
      offset="4, 20"
      arrow={false}
      theme="dcdark"
      size="medium"
      content="추가하기"
      placement="top"
      type="plus"
      iconStyle={{ marginLeft: '10px' }}
    />
    <BaseTooltip
      theme="dcdark"
      size="medium"
      content="전체 보기"
      placement="right"
      type="plus"
      customComponent={
        <div style={{ marginLeft: '20px', cursor: 'pointer' }}>전체보기</div>
      }
    />
  </StoryContainer>
);

const Template: ComponentStory<typeof BaseTooltip> = (args) => (
  <BaseTooltip {...args} />
);

export const Basic = Template.bind({});

export default meta;
