import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BaseModal } from './index';
import { NewBaseButton } from 'components/Buttons';

const meta: ComponentMeta<typeof BaseModal> = {
  title: 'Modal/BaseModal',
  component: BaseModal,
};

const Template: ComponentStory<typeof BaseModal> = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <NewBaseButton
        theme="light"
        size="large"
        outline
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </NewBaseButton>
      <BaseModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div
          style={{
            boxShadow: ' 0px 0px 21px 0px rgba(143,143,143,0.4)',
            backgroundColor: 'white',
            height: '50vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <span>Modal is Opened</span>
          <NewBaseButton
            theme="red"
            size="large"
            onClick={() => setIsOpen(false)}
          >
            Close Modal
          </NewBaseButton>
        </div>
      </BaseModal>
    </div>
  );
};

export const Basic = Template.bind({});

export default meta;
