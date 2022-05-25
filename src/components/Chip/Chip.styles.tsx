import styled, { css } from 'styled-components';

import { yellow50, yellow60, brown100 } from '../../core/GlobalStyle/variable';
import { font, textEllipsis } from '../../core/GlobalStyle/mixin';

export const Container = styled.div<{ isOverflowed: boolean }>`
  ${font({ size: '13px', color: brown100 })};
  background-color: ${yellow50};

  margin-right: 4px;
  padding: 6px 10px;
  height: 28px;
  min-width: 54px;
  border-radius: 14px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${yellow60};
  white-space: nowrap;

  ${({ isOverflowed }) =>
    isOverflowed &&
    css`
      max-width: 100%;
    `}
`;

export const ChipContent = styled.div<{ isOverflowed: boolean }>`
  ${({ isOverflowed }) =>
    isOverflowed &&
    css`
      ${textEllipsis};
    `}

  margin-bottom: 1px;
`;
