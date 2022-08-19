import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MoreButton } from './index';
import { DoczContainer } from 'components/DoczContainer';
import { NewBaseButton } from '../NewBaseButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

const meta: ComponentMeta<typeof MoreButton> = {
  title: 'Buttons/MoreButton',
  component: MoreButton,
};

const Template: ComponentStory<typeof MoreButton> = (args) => (
  <MoreButton {...args} />
);

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Variants: ComponentStory<typeof MoreButton> = () => {
  const [isShow, setIsShow] = React.useState(false);
  const toggle = () => setIsShow(!isShow);

  return (
    <>
      <DoczContainer direction="column">
        <div>MoreButton Show/Hide( Static )</div>
        <DoczContainer direction="row">
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
        </DoczContainer>
      </DoczContainer>

      <DoczContainer direction="column">
        <div>MoreButton onClick Event Bind( Dynamic )</div>
        <DoczContainer direction="row">
          <NewBaseButton onClick={toggle}>
            {isShow ? 'Hide' : 'Show'}
            <MoreButton size="large" value={isShow} />
          </NewBaseButton>
        </DoczContainer>
      </DoczContainer>
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {};

export default meta;
