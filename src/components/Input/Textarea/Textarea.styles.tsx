import styled, { css } from 'styled-components';

import {
  contents100,
  gray100,
  gray150,
  gray400,
  red100,
  text,
  font,
  textSmall,
  textExtraSmall,
  flexCenterY,
  placeholderColor,
  mobileOnly,
  mobileSubTitle13,
  secondary100,
} from '../../../core/GlobalStyle';

export const Container = styled.div``;

export const Label = styled.div`
  ${flexCenterY}
  ${textSmall({ color: contents100 })};

  margin-bottom: 8px;
  min-height: 20px;

  ${mobileOnly(css`
    ${mobileSubTitle13({ color: contents100, weight: 'normal' })};
  `)};
`;

export const Title = styled.span``;

export const RequiredMark = styled.span`
  margin-left: 4px;
  color: ${secondary100};
`;

export const Notice = styled.span`
  ${textExtraSmall({ color: red100 })};
  float: right;
`;

export const Text = styled.textarea<{
  resize?: boolean;
}>`
  ${font({ size: '15px', color: text })}
  ${placeholderColor(gray150)}

  height: 128px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${gray100};
  padding: 11px 12px;
  box-sizing: border-box;
  outline: none;
  resize: ${({ resize }) => (resize ? 'vertical' : 'none')};
  -webkit-appearance: none;

  &:focus {
    border: 1px solid ${gray150};
  }

  ${mobileOnly(css`
    ${mobileSubTitle13({ color: text, weight: 'normal' })};

    padding: 10px;
  `)};
`;

export const TextCount = styled.div`
  font-size: 12px;
  text-align: right;
  color: ${gray150};
`;

export const Progress = styled.span<{
  inProgress: boolean;
}>`
  ${({ inProgress }) =>
    inProgress &&
    css`
      color: ${gray400};
    `}
`;
export const Max = styled.span``;
