import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InfoTooltip } from './index';
import { StoryContainer } from 'components/StoryContainer';
import { contents000 } from 'core/GlobalStyle/variable';

const meta: ComponentMeta<typeof InfoTooltip> = {
  title: 'Control/InfoTooltip',
  component: InfoTooltip,
  args: {
    content: 'InfoTooltip',
    visible: true,
  },
};

export const Variants: ComponentStory<typeof InfoTooltip> = () => {
  const [visible, setVisible] = React.useState(true);
  const onClickToolTip = () => {
    setVisible(false);
  };
  return (
    <StoryContainer direction="column">
      <StoryContainer direction="column">
        <div>Tooltip</div>
        <InfoTooltip
          visible={visible}
          content={<span>툴팁을 클릭하면, 다시 보지 않게 됩니다.</span>}
          onClick={onClickToolTip}
        />
      </StoryContainer>
      <br />
      <br />
      <br />
      <StoryContainer direction="column">
        <div>Tooltip with onMount Animation</div>
        <InfoTooltip
          visible={visible}
          content={<span>HeadShake Animation</span>}
          onClick={onClickToolTip}
          customAnimation="headShake"
        />
      </StoryContainer>
    </StoryContainer>
  );
};

const Template: ComponentStory<typeof InfoTooltip> = (args) => (
  <InfoTooltip {...args} />
);

export const Basic = Template.bind({});

export default meta;
