import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ConfirmModal } from './index';
import { NewBaseButton } from 'components/Buttons';

const meta: ComponentMeta<typeof ConfirmModal> = {
  title: 'Modal/ConfirmModal',
  component: ConfirmModal,
};

export const Success: ComponentStory<typeof ConfirmModal> = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const handleSubmit = () => {
    alert('보냈습니다');
  };
  return (
    <div style={{ width: 'fit-content' }}>
      <NewBaseButton
        theme="primary"
        size="large"
        onClick={() => setIsOpen(true)}
      >
        Open Success Modal
      </NewBaseButton>
      <ConfirmModal
        isDraggable={true}
        isDragBounded={true}
        dragOnStart={() => {
          console.log('Drag Start');
        }}
        dragOnStop={() => {
          console.log('Drag Stop');
        }}
        dragOnDrag={() => {}}
        isOpen={isOpen}
        title={`000 님에게 메시지를 보내시겠습니까?`}
        message={'테스트 메시지 영역'}
        okText="보내기"
        closeText="취소"
        onOk={() => handleSubmit()}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export const Warning: ComponentStory<typeof ConfirmModal> = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const handleSubmit = () => {
    alert('보냈습니다');
  };
  return (
    <div style={{ width: 'fit-content' }}>
      <NewBaseButton
        theme="primary"
        size="large"
        onClick={() => setIsOpen(true)}
      >
        Open Waring Modal
      </NewBaseButton>
      <ConfirmModal
        icon={'warning'}
        type={'delete'}
        isOpen={isOpen}
        title={`000 님에게 메시지를 보내시겠습니까?`}
        message={'테스트 메시지 영역'}
        okText="보내기"
        closeText="취소"
        onOk={() => handleSubmit()}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default meta;
