import styled, { css } from 'styled-components';

import { yellow50, brown100 } from '../../core/GlobalStyle/variable';
import { textSmall, textEllipsis } from '../../core/GlobalStyle/mixin';

export const Container = styled.div`
  ${textSmall({ color: brown100 })};
  background-color: ${yellow50};

  ${({ isOverflowed }) =>
    isOverflowed &&
    css`
      ${textEllipsis};
      min-width: 14px;
      margin: 0px !important;
    `}

  margin-right: 4px;
  padding: 1px 6px;
  height: 24px;
  border-radius: 2px;
  box-sizing: border-box;
  display: inline-block;
  white-space: nowrap;
`;
