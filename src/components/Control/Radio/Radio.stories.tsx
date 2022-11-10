import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoryContainer } from 'components/StoryContainer';

import { Radio } from './index';

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
          <Radio checked />
          <Radio />
        </StoryContainer>
      </StoryContainer>
      <StoryContainer direction="column">
        <StoryContainer direction="row">
          Black Radio on/off( Static )
        </StoryContainer>
        <StoryContainer direction="row">
          <Radio theme="black" checked />
          <Radio theme="black" />
        </StoryContainer>
      </StoryContainer>
      <StoryContainer direction="column">
        <StoryContainer direction="row">
          Radio onClick Event Bind( Dynamic )
        </StoryContainer>
        <StoryContainer direction="row">
          <Radio checked={radioId === 1} onClick={() => setRadio(1)} />
          <span>옵션1</span>
          <Radio checked={radioId === 2} onClick={() => setRadio(2)} />
          <span>옵션2</span>
        </StoryContainer>
      </StoryContainer>
      <StoryContainer direction="column">
        <StoryContainer direction="row">
          Black Radio onClick Event Bind( Dynamic )
        </StoryContainer>
        <StoryContainer direction="row">
          <Radio
            checked={radioId === 1}
            onClick={() => setRadio(1)}
            theme="black"
          />
          <span>옵션1</span>
          <Radio
            checked={radioId === 2}
            onClick={() => setRadio(2)}
            theme="black"
          />
          <span>옵션2</span>
        </StoryContainer>
      </StoryContainer>
      <StoryContainer direction="column">
        <StoryContainer direction="row">
          Small Radio onClick Event Bind( Dynamic )
        </StoryContainer>
        <StoryContainer direction="row">
          <Radio
            checked={radioId === 1}
            onClick={() => setRadio(1)}
            $size="small"
          />
          <span>옵션1</span>
          <Radio
            checked={radioId === 2}
            onClick={() => setRadio(2)}
            $size="small"
          />
          <span>옵션2</span>
        </StoryContainer>
      </StoryContainer>
      <StoryContainer direction="column">
        <StoryContainer direction="row">
          Medium Radio onClick Event Bind( Dynamic )
        </StoryContainer>
        <StoryContainer direction="row">
          <Radio
            checked={radioId === 1}
            onClick={() => setRadio(1)}
            $size="medium"
          />
          <span>옵션1</span>
          <Radio
            checked={radioId === 2}
            onClick={() => setRadio(2)}
            $size="medium"
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
