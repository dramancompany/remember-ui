import styled, { css } from 'styled-components';

import { contents999, disable, flexCenter } from '../../../core/GlobalStyle';
import { THEME_COLOR } from '../../../core/GlobalStyle/theme';
import type { NewBaseButtonStyleType } from './NewBaseButton.types';

const NEW_BASE_BUTTON_SIZES = {
  small: {
    fontSize: '12px',
    height: '32px',
    minWidth: '68px',
    padding: '0 16px',
  },
  medium: {
    fontSize: '14px',
    height: '36px',
    minWidth: '78px',
    padding: '0 20px',
  },
  large: {
    fontSize: '16px',
    height: '44px',
    minWidth: '108px',
    padding: '0 20px',
  },
  xlarge: {
    fontSize: '16px',
    height: '52px',
    minWidth: '116px',
    padding: '0 24px',
  },
} as const;

export const Inner = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div<NewBaseButtonStyleType>`
  ${flexCenter};

  box-sizing: border-box;
  cursor: ${({ isLoading, disabled }) =>
    isLoading || disabled ? 'default' : 'pointer'};
  font-weight: 400;
  border-radius: 4px;
  color: ${contents999};

  ${({ size = 'small' }) => css`
    height: ${NEW_BASE_BUTTON_SIZES[size].height};
    font-size: ${NEW_BASE_BUTTON_SIZES[size].fontSize};
    min-width: ${NEW_BASE_BUTTON_SIZES[size].minWidth};
    padding: ${NEW_BASE_BUTTON_SIZES[size].padding};
  `};

  ${({ buttonTheme }) => css`
    border: 1px solid ${THEME_COLOR[buttonTheme].sub};
    background-color: ${THEME_COLOR[buttonTheme].sub};
  `};

  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `}

  ${({ outline, buttonTheme, disabled }) => [
    outline &&
      css`
        background-color: transparent;
        color: ${THEME_COLOR[buttonTheme].main};
      `,
    disabled &&
      css`
        color: ${contents999};
        border: 1px solid ${disable};
        background-color: ${disable};
      `,
    disabled &&
      outline &&
      css`
        border-color: ${disable};
        color: ${disable};
        background-color: transparent;
      `,
  ]}
`;
