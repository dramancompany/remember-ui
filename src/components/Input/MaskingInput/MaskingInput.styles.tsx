import styled, { css } from 'styled-components';
import MaskedInput from 'react-text-mask';

import {
  gray100,
  gray150,
  contents100,
  gray400,
  red100,
  font,
  textSmall,
  placeholderColor,
  mobileSubTitle13,
  mobileOnly,
} from '../../../core/GlobalStyle';

export const Container = styled.div``;

export const Label = styled.div<{ $marginBottom?: number }>`
  ${textSmall({ color: contents100 })};

  display: flex;
  align-items: center;
  margin-bottom: ${({ $marginBottom }) =>
    $marginBottom ? `${$marginBottom}px` : '8px'};
  min-height: 20px;

  ${mobileOnly(css`
    ${mobileSubTitle13({ color: contents100, weight: 'normal' })};
  `)};
`;

export const Mark = styled.img`
  margin-left: 4px;
  position: relative;
  top: 1px;
  width: 6px;
  height: 6px;
`;

export const ErrorMessage = styled.div`
  ${font({ size: '13px', color: red100, weight: 'normal' })}

  height: 19px;
`;

export const Input = styled(MaskedInput)<{
  error?: boolean;
}>`
  ${font({ size: '15px', color: gray400 })}
  ${placeholderColor(gray150)}

  height: 44px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${gray100};
  padding: 11px 12px;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border: 1px solid ${gray150};
  }

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${red100};
    `}

  ${mobileOnly(css`
    ${mobileSubTitle13({ color: gray400, weight: 'normal' })};

    padding: 10px;
  `)};
`;
