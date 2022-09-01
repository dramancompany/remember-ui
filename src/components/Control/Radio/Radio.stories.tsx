import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio } from './index';
import { StoryContainer } from 'components/StoryContainer';

const meta: ComponentMeta<typeof Radio> = {
  title: 'Control/Radio',
  component: Radio,
};

export const Variants: ComponentStory<typeof Radio> = () => {
  const [radioId, setRadioId] = React.useState(1);
  const setRadio = (id: number) => setRadioId(id);
  return (
    <>
      <StoryContainer direction="column">
        <StoryContainer direction="row">Radio on/off( Static )</StoryContainer>
        <StoryContainer direction="row">
          <Radio isChecked />
          <Radio />
        </StoryContainer>
      </StoryContainer>
      <StoryContainer direction="column">
        <StoryContainer direction="row">
          Black Radio on/off( Static )
        </StoryContainer>
        <StoryContainer direction="row">
          <Radio theme="black" isChecked />
          <Radio theme="black" />
        </StoryContainer>
      </StoryContainer>
      <StoryContainer direction="column">
        <StoryContainer direction="row">
          Radio onClick Event Bind( Dynamic )
        </StoryContainer>
        <StoryContainer direction="row">
          <Radio isChecked={radioId === 1} onClick={() => setRadio(1)} />
          <span>옵션1</span>
          <Radio isChecked={radioId === 2} onClick={() => setRadio(2)} />
          <span>옵션2</span>
        </StoryContainer>
      </StoryContainer>
      <StoryContainer direction="column">
        <StoryContainer direction="row">
          Black Radio onClick Event Bind( Dynamic )
        </StoryContainer>
        <StoryContainer direction="row">
          <Radio
            isChecked={radioId === 1}
            onClick={() => setRadio(1)}
            theme="black"
          />
          <span>옵션1</span>
          <Radio
            isChecked={radioId === 2}
            onClick={() => setRadio(2)}
            theme="black"
          />
          <span>옵션2</span>
        </StoryContainer>
      </StoryContainer>
    </>
  );
};

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Basic = Template.bind({});

export default meta;
