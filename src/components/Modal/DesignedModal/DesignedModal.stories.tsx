import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DesignedModal } from './index';
import { NewBaseButton } from 'components/Buttons';
import { DoczContainer } from 'components/DoczContainer';
import { Radio } from 'components/Control';

const meta: ComponentMeta<typeof DesignedModal> = {
  title: 'Modal/DesignedModal',
  component: DesignedModal,
};

export const Basic: ComponentStory<typeof DesignedModal> = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [radioId, setRadioId] = React.useState(1);
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
        Open Designed Modal1
      </NewBaseButton>
      <DesignedModal
        isOpen={isOpen}
        isDraggable={true}
        isDragBounded={true}
        title={`구매`}
        subTitle={'이용권 구매하기'}
        submitText="확인"
        closeText="취소"
        submit={() => handleSubmit()}
        onClose={() => setIsOpen(false)}
        close={() => setIsOpen(false)}
        submitButtonDisabled={isProcessing}
        isLoading={isProcessing}
      >
        <DoczContainer direction="row">
          <div>Radio onClick Event Bind</div>
        </DoczContainer>
        <DoczContainer direction="row">
          <Radio isChecked={radioId === 1} onClick={() => setRadio(1)} />
          <span>옵션1</span>
          <Radio isChecked={radioId === 2} onClick={() => setRadio(2)} />
          <span>옵션2</span>
        </DoczContainer>
      </DesignedModal>
    </div>
  );
};

export default meta;
