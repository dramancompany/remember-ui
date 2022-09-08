import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoryContainer } from 'components/StoryContainer';

import { ImageInput } from './index';

const meta: ComponentMeta<typeof ImageInput> = {
  title: 'Input/ImageInput',
  component: ImageInput,
};

export const Variants: ComponentStory<typeof ImageInput> = () => {
  const [imageUrl, setImageUrl] = React.useState('');
  return (
    <StoryContainer direction="column">
      {imageUrl && (
        <img
          src={imageUrl}
          alt="logo"
          style={{
            width: '120px',
            height: '120px',
            position: 'relative',
            border: '1px solid #d8d8d8',
            objectFit: 'contain',
            marginBottom: '16px',
          }}
        />
      )}
      <ImageInput
        label="회사 로고 이미지"
        id="company-logo-img"
        onChange={(image) => image && setImageUrl(image.toString())}
      />
    </StoryContainer>
  );
};

export default meta;
