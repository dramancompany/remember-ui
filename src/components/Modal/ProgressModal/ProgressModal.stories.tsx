import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NewBaseButton } from 'components/Buttons';

import { ProgressModal } from './index';

const meta: ComponentMeta<typeof ProgressModal> = {
  title: 'Modal/ProgressModal',
  component: ProgressModal,
};

export const Basic: ComponentStory<typeof ProgressModal> = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentCount, setCurrentCount] = React.useState(1);
  const openModal = () => {
    setIsOpen(true);
    const interval = setInterval(() => {
      setCurrentCount((prev) => prev + 1);
    }, 500);
    setTimeout(() => {
      clearInterval(interval);
      setCurrentCount(1);
      setIsOpen(false);
    }, 2500);
  };
  return (
    <div style={{ width: 'fit-content' }}>
      <NewBaseButton theme="primary" size="large" onClick={openModal}>
        Open Progress Modal
      </NewBaseButton>
      <ProgressModal
        isOpen={isOpen}
        currentCount={currentCount}
        totalCount={5}
        title={(_currentCount, totalCount) =>
          `${_currentCount} / ${totalCount}명에게 메시지 전송 중`
        }
        message="메시지 전송 중에 브라우저 창을 닫지 마세요"
      />
    </div>
  );
};

export default meta;
