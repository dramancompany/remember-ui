import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch } from './index';
import { StoryContainer } from 'components/StoryContainer';
import { contents000 } from 'core/GlobalStyle/variable';

const meta: ComponentMeta<typeof Switch> = {
  title: 'Control/Switch',
  component: Switch,
};

export const Variants: ComponentStory<typeof Switch> = () => {
  const [isChecked, setIsChecked] = React.useState(true);
  const toggle = () => setIsChecked(!isChecked);
  return (
    <>
      <StoryContainer direction="row">
        <StoryContainer direction="column">
          <div>small</div>
          <Switch checked={isChecked} onClick={toggle} />
        </StoryContainer>
        <StoryContainer direction="column">
          <div>large</div>
          <Switch checked={isChecked} onClick={toggle} size="large" />
        </StoryContainer>
      </StoryContainer>
      <StoryContainer direction="row">
        <StoryContainer direction="column">
          <div>small black</div>
          <Switch checked={isChecked} onClick={toggle} color={contents000} />
        </StoryContainer>
        <StoryContainer direction="column">
          <div>large black</div>
          <Switch
            checked={isChecked}
            onClick={toggle}
            size="large"
            color={contents000}
          />
        </StoryContainer>
      </StoryContainer>
    </>
  );
};

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Basic = Template.bind({});

export default meta;
