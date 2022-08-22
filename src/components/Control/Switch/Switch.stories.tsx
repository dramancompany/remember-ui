import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch } from './index';
import { DoczContainer } from 'components/DoczContainer';
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
      <DoczContainer direction="row">
        <DoczContainer direction="column">
          <div>small</div>
          <Switch checked={isChecked} onClick={toggle} />
        </DoczContainer>
        <DoczContainer direction="column">
          <div>large</div>
          <Switch checked={isChecked} onClick={toggle} size="large" />
        </DoczContainer>
      </DoczContainer>
      <DoczContainer direction="row">
        <DoczContainer direction="column">
          <div>small black</div>
          <Switch checked={isChecked} onClick={toggle} color={contents000} />
        </DoczContainer>
        <DoczContainer direction="column">
          <div>large black</div>
          <Switch
            checked={isChecked}
            onClick={toggle}
            size="large"
            color={contents000}
          />
        </DoczContainer>
      </DoczContainer>
    </>
  );
};

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Basic = Template.bind({});

export default meta;
