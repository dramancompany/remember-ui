import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NewBaseButton } from 'components/Buttons';
import { DoczContainer } from 'components/DoczContainer';
import { Radio } from 'components/Control/Radio';
import { BaseInput } from 'components/Input';
import { MessageModal } from './index';

const meta: ComponentMeta<typeof MessageModal> = {
  title: 'Modal/MessageModal',
  component: MessageModal,
};

export const Basic: ComponentStory<typeof MessageModal> = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [radioId, setRadioId] = React.useState(1);
  const setRadio = (id: number) => setRadioId(id);
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
      <MessageModal
        isOpen={isOpen}
        onConfirm={() => handleSubmit()}
        onClose={() => setIsOpen(false)}
      >
        <DoczContainer direction="row">
          <div>취소랑 확인이 있는 모달</div>
        </DoczContainer>
        <DoczContainer direction="row">
          <Radio isChecked={radioId === 1} onClick={() => setRadio(1)} />
          <span>옵션1</span>
          <Radio isChecked={radioId === 2} onClick={() => setRadio(2)} />
          <span>옵션2</span>
        </DoczContainer>
      </MessageModal>
    </div>
  );
};

export const ConfirmOnly: ComponentStory<typeof MessageModal> = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [keyword, setKeyword] = React.useState('');

  return (
    <div style={{ width: 'fit-content' }}>
      <NewBaseButton
        theme="primary"
        size="large"
        onClick={() => setIsOpen(true)}
      >
        Open Waring Modal
      </NewBaseButton>
      <MessageModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DoczContainer direction="row">
          <div>확인만 있는 모달</div>
        </DoczContainer>
        <BaseInput
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          label="키워드를 입력해 주세요"
        />
      </MessageModal>
    </div>
  );
};
// style={{ boxShadow: ' 0px 0px 21px 0px rgba(143,143,143,0.4)' }}

export default meta;
