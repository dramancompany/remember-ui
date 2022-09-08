import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NewBaseButton } from 'components/Buttons';
import { StoryContainer } from 'components/StoryContainer';
import { Radio } from 'components/Control/Radio';

import { MobileFullModal } from './index';

const meta: ComponentMeta<typeof MobileFullModal> = {
  title: 'Modal/MobileFullModal',
  component: MobileFullModal,
};

export const Basic: ComponentStory<typeof MobileFullModal> = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [radioId, setRadioId] = React.useState(1);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const setRadio = (id: number) => setRadioId(id);
  const handleSubmit = () => {
    setIsProcessing(true);
    setTimeout(() => {
      alert('보냈습니다');
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div style={{ width: 'fit-content' }}>
      <NewBaseButton
        theme="primary"
        size="large"
        onClick={() => setIsOpen(true)}
      >
        Open MobileFull Modal
      </NewBaseButton>
      <MobileFullModal
        isOpen={isOpen}
        title="채용 포지션 저장"
        subTitle="테스트 포지션 저장"
        headerButtonText="포지션 추가"
        submitText="저장"
        submit={() => handleSubmit()}
        onHeaderButtonClick={() => {
          alert('포지션 추가 버튼 클릭');
        }}
        onClose={() => setIsOpen(false)}
        submitButtonDisabled={isProcessing}
        isLoading={isProcessing}
      >
        <StoryContainer direction="row">
          <div>Radio onClick Event Bind</div>
          <Radio isChecked={radioId === 1} onClick={() => setRadio(1)} />
          <span>옵션1</span>
          <Radio isChecked={radioId === 2} onClick={() => setRadio(2)} />
          <span>옵션2</span>
        </StoryContainer>
      </MobileFullModal>
    </div>
  );
};

export default meta;
