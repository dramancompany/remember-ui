import styled from 'styled-components';

import {
  gray200,
  gray,
  flexCenterY,
  textSmall,
  textExtraSmall,
} from '../../../core/GlobalStyle';

export const Container = styled.div``;

export const Title = styled.div`
  ${textSmall({ color: gray })};

  margin-bottom: 10px;
`;

export const Image = styled.div`
  ${flexCenterY}
`;

export const FileName = styled.span`
  ${textExtraSmall({ color: gray200 })};

  margin-left: 8px;
`;

export const InputFile = styled.input.attrs({
  type: 'file',
  accept: 'image/png, image/jpeg',
})`
  /* 파일 필드 숨기기 */
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
`;
