import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio } from './index';
import { DoczContainer } from 'components/DoczContainer';

const meta: ComponentMeta<typeof Radio> = {
  title: 'Control/Radio',
  component: Radio,
};

export const Variants: ComponentStory<typeof Radio> = () => {
  const [radioId, setRadioId] = React.useState(1);
  const setRadio = (id: number) => setRadioId(id);
  return (
    <>
      <DoczContainer direction="column">
        <DoczContainer direction="row">Radio on/off( Static )</DoczContainer>
        <DoczContainer direction="row">
          <Radio isChecked />
          <Radio />
        </DoczContainer>
      </DoczContainer>
      <DoczContainer direction="column">
        <DoczContainer direction="row">
          Black Radio on/off( Static )
        </DoczContainer>
        <DoczContainer direction="row">
          <Radio theme="black" isChecked />
          <Radio theme="black" />
        </DoczContainer>
      </DoczContainer>
      <DoczContainer direction="column">
        <DoczContainer direction="row">
          Radio onClick Event Bind( Dynamic )
        </DoczContainer>
        <DoczContainer direction="row">
          <Radio isChecked={radioId === 1} onClick={() => setRadio(1)} />
          <span>옵션1</span>
          <Radio isChecked={radioId === 2} onClick={() => setRadio(2)} />
          <span>옵션2</span>
        </DoczContainer>
      </DoczContainer>
      <DoczContainer direction="column">
        <DoczContainer direction="row">
          Black Radio onClick Event Bind( Dynamic )
        </DoczContainer>
        <DoczContainer direction="row">
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
        </DoczContainer>
      </DoczContainer>
    </>
  );
};

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});

export default meta;
