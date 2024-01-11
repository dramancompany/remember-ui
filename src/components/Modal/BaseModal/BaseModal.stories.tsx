import { StoryObj } from '@storybook/react';
import React from 'react';

import { NewBaseButton } from 'components/Buttons';

import { BaseModal } from './index';

type Story = StoryObj<typeof BaseModal>;

const meta = {
  title: 'Modal/BaseModal',
  component: BaseModal,
};

export const Variants: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = React.useState(true);

    return (
      <div style={{ width: 'fit-content' }}>
        <NewBaseButton
          theme="light"
          size="large"
          outline
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </NewBaseButton>
        <BaseModal isOpen={isOpen} onClose={() => setIsOpen(false)} {...args}>
          <div
            style={{
              boxShadow: '0px 0px 21px 0px rgba(143,143,143,0.4)',
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
  },
};

export default meta;
