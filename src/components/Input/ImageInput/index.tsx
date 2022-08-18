import React, { ChangeEvent, useState } from 'react';

import { customToast as toast } from '../../../utils';
import { BaseButton } from '../../Button';

import {
  Container,
  Title,
  Image,
  FileName,
  InputFile,
} from './ImageInput.styles';

interface Props {
  id: string;
  onChange: (fileReaderResult?: string | ArrayBuffer | null) => void;
  label?: React.ReactNode;
  className?: string;
}

export const ImageInput = ({ id, onChange, label, className }: Props) => {
  const [imageName, setImageName] = useState('');

  const changeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const IMAGE_SIZE_LIMIT = 1024 * 1024 * 5;
      const reader = new FileReader();
      const imageSize = e.target.files[0].size;
      setImageName(e.target.files[0].name);

      if (imageSize < IMAGE_SIZE_LIMIT) {
        reader.onload = (nestedEvent) => {
          onChange(nestedEvent.target?.result);
        };
        reader.readAsDataURL(e.target.files[0]);
      } else {
        toast('5MB 이상 이미지는 업로드 할 수 없습니다');
        setImageName('');
      }
    }
  };
  return (
    <Container className={className}>
      {label && <Title>{label}</Title>}
      <Image>
        <label htmlFor={id}>
          <BaseButton width={82} onClick={() => {}} color="black">
            파일 선택
          </BaseButton>
        </label>
        <FileName>{imageName}</FileName>
      </Image>
      <InputFile id={id} onChange={changeImage} />
    </Container>
  );
};
