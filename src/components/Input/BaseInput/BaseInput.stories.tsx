import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BaseInput } from './index';
import { StoryContainer } from 'components/StoryContainer';
import { Checkbox } from 'components/Control/Checkbox';

const meta: ComponentMeta<typeof BaseInput> = {
  title: 'Input/BaseInput',
  component: BaseInput,
};

export const Variants: ComponentStory<typeof BaseInput> = () => {
  const [buyerName, setBuyerName] = React.useState('');
  const [phoneNo, setPhoneNo] = React.useState('');
  return (
    <>
      <StoryContainer direction="row">
        <BaseInput type="text" name="test1" onChange={() => {}} />
        <BaseInput name="test2" readOnly onChange={() => {}} />
        <BaseInput name="test2" disabled onChange={() => {}} />
      </StoryContainer>
      <br />
      <StoryContainer direction="row">
        <BaseInput
          name="test2"
          label="제목"
          placeholder="제목을 입력하세요 (최대 50자)"
          maxLength={50}
          marginBottom={10}
          onChange={() => {}}
        />
        <BaseInput
          name="buyerName"
          label="구매자"
          placeholder="구매자명을 입력하세요"
          value={buyerName}
          onChange={(e) => setBuyerName(e.target.value)}
          maxLength={150}
          marginBottom={10}
          autoFocus
          required
          useError
          validate={(name) => {
            if (!name) {
              return '구매자명을 입력하세요';
            }
            return '';
          }}
        />
        <BaseInput
          name="phoneNo"
          label="핸드폰"
          placeholder="핸드폰 번호를 입력하세요"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          maxLength={150}
          marginBottom={10}
          required
          useError
          onlyNumber
          validate={(phone) => {
            if (!phone) {
              return '핸드폰 번호를 입력하세요';
            }
            return '';
          }}
        />
        <BaseInput
          name="email"
          label="이메일"
          placeholder="이메일"
          onChange={() => {}}
          footer={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox state="on" />
              <span className="notify-text">알림메일을 수신합니다</span>
            </div>
          }
        />
      </StoryContainer>
    </>
  );
};

export default meta;
