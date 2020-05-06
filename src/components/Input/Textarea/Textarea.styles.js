import styled from 'styled-components';

import { requiredIcon } from '../../../assets';

import {
  gray,
  gray100,
  gray150,
  red100,
  text,
  font,
  textSmall,
  textExtraSmall,
  flexCenterY,
  placeholderColor,
} from '../../../core/GlobalStyle';

export const Container = styled.div``;

export const Label = styled.div`
  ${flexCenterY}
  ${textSmall({ color: gray })};

  margin-bottom: 8px;
  min-height: 20px;
`;

Label.Title = styled.span``;

Label.Icon = styled.img.attrs({
  width: 6,
  height: 6,
  src: requiredIcon,
  alt: 'mark',
})`
  margin-left: 4px;
  position: relative;
  top: 1px;
`;

Label.Notice = styled.span`
  ${textExtraSmall({ color: red100 })};
  float: right;
`;

export const Text = styled.textarea.attrs()`
  ${font({ size: '15px', color: text })}
  ${placeholderColor(gray150)}

  height: 128px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${gray100};
  padding: 11px 12px;
  box-sizing: border-box;
  outline: none;
  resize: none;
  -webkit-appearance: none;

  &:focus {
    border: 1px solid ${gray150};
  }
`;
