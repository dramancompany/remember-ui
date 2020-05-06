import styled, { css } from 'styled-components';

import {
  gray50,
  red100,
  text,
  textSmall,
  flexCenterY,
} from '../../../core/GlobalStyle';

export const Container = styled.div`
  ${flexCenterY}

  cursor: pointer;
  padding: 10px 20px;

  &:hover {
    background-color: ${gray50};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Popover = styled.div`
  ${textSmall({ weight: 'normal', color: text })}

  ${({ selected }) =>
    selected &&
    css`
      font-weight: bold;
    `}

  ${({ warning }) =>
    warning &&
    css`
      color: ${red100};
    `}

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`;
